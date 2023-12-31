// src/pages/Home.js
import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Link, useParams } from "react-router-dom";
import { getCourseDetail } from "../../services/course/course.service.js";
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createPayment } from "../../services/payment/payment.service";
import _ from 'lodash';
const DetailCourse = () => {
    const [course, setCourse] = React.useState(null);
    const [check, setCheck] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [stringDate, setStringDate] = React.useState("");
    const [token, setToken] = React.useState(null);
    const { id } = useParams();
    React.useEffect(() => {
        let token = localStorage.getItem("token");     
        setToken(token);
        var ngayHienTai = new Date();
        // Lấy thông tin về ngày, tháng, năm, giờ, phút, giây
        var ngay = ngayHienTai.getDate();
        var thang = ngayHienTai.getMonth() + 1; // Tháng bắt đầu từ 0, nên cộng thêm 1
        var nam = ngayHienTai.getFullYear();
        var gio = ngayHienTai.getHours();
        var phut = ngayHienTai.getMinutes();
        var giay = ngayHienTai.getSeconds();
        let str = ngay + '/' + thang + '/' + nam + ' ' + gio + ':' + phut + ':' + giay;
        setStringDate(str);
        const fetchData = async () => {
            try
            {
                const result = await getCourseDetail(id);
                console.log("data", result)
                // Cập nhật state với dữ liệu nhận được
                setCourse(result.data);
                if(token != null){
                    const decoded = jwtDecode(token);
                    console.log("decode", decoded)
                    console.log(decoded?.sub)
                    setEmail(decoded?.sub);
                    console.log("result?.data?.orders",result?.data?.orders,decoded?.sub)
                    let abc = result?.data?.orders;
                    for(let i = 0; i< abc.length ; i++){
                        console.log("abc.user.email",abc[i].user.email)
                        if(abc[i].user?.email === decoded?.sub){
                            setCheck(true)
                        }
                    }
                }
            } catch (error)
            {
                console.error('Error fetching data:', error);
            }
        };
        // Gọi hàm fetchData
        fetchData();
    }, [id])
    const onSubmit = async (obj) => {
        if (token != null)
        {
            const payload = {
                "totalPrice": obj.price,
                "userId": null,
                "courseId": obj.courseId,
                "email": email
            }
            const data = await createPayment(payload);
            console.log("data", data?.data?.url)
            window.location.href = data?.data?.url
        } else
        {
            toast.error("Bạn cần phải đăng nhập");
        }
    }
    return (
        <div>
            <ToastContainer />
            <Header />
            <main>
                <section className="single-blog-wrap-layout1">

                    <section className="single-blog-wrap-layout2">
                        <div className="container">
                            <div className="single-blog-box-layout2">
                                <div className="blog-banner">
                                    <img src={course?.image} alt="blog"
                                        style={{ width: '100%', height: '450px' }} />
                                </div>
                                <div className="single-blog-content">
                                    <div className="blog-entry-content">
                                       
                                        <h2 className="item-title">{course?.courseName}</h2>
                                        <div className="single-blog-content">
                                            <div className="blog-entry-content">
                                                <ul className="entry-meta meta-color-dark">
                                                    <li><i className="fas fa-tag"></i>{course?.courseType.typeName}</li>
                                                    <li><i className="fas fa-calendar-alt"></i>{course?.free ? 'Miễn phí' : 'Có phí :' + course?.price + ' VNĐ'}  </li>
                                                    <li><i className="far fa-clock"></i>{course?.courseVideos.length} Videos</li>
                                                </ul>
                                                <h2 className="item-title">{course?.courseName}</h2>
                                            </div>
                                           {check ?<b style={{color:'green'}}>Đã mua</b> : null} 
                                        </div>                                     
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="container">
                        <div className="row gutters-50">
                            <div className="col-lg-8">
                                <div className="single-blog-box-layout1">
                                    <div className="blog-details">
                                        {course?.description}
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-4 sidebar-widget-area sidebar-break-md">
                                {
                                    course?.free || check ? <div className="widget">
                                        <div className="section-heading heading-dark">
                                            <h3 className="item-heading">Danh sách Video</h3>
                                        </div>
                                        <div className="widget-latest">
                                            <ul className="block-list">
                                                {course?.courseVideos && course?.courseVideos?.map((item) => (
                                                    <li key={item.courseVideoId.toString()} className="single-item">
                                                        <div className="item-img">
                                                            <Link to={`/video/${item.courseVideoId}/${course.courseId}`}>   <iframe width="100%" height="200" src={item?.videoUrl}
                                                                title="YouTube video player" frameborder="0"
                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                allowfullscreen></iframe></Link>
                                                        </div>
                                                        <div className="item-content">
                                                            <h4
                                                                className="item-title"
                                                                style={{
                                                                    fontWeight: 500,
                                                                    fontSize: '16px',
                                                                    lineHeight: 1.5,
                                                                    marginBottom: 0,
                                                                    color: '#111111',
                                                                    overflow: 'hidden',
                                                                    WebkitBoxOrient: 'vertical',
                                                                    WebkitLineClamp: 2,
                                                                    display: '-webkit-box',
                                                                }}
                                                            >
                                                                <Link to={`/video/${item.courseVideoId}/${course.courseId}`} style={{ color: '#111111', textDecoration: 'none' }}>
                                                                    {item.videoName}
                                                                </Link>
                                                                <br />
                                                                <Link to={`/video/${item.courseVideoId}/${course.courseId}`} className="item-btn" style={{ display: 'inline-block', padding: '8px 15px', backgroundColor: '#3498db', color: '#ffffff', borderRadius: '5px', textDecoration: 'none', transition: 'background-color 0.3s ease' }}>
                                                                    <i className="" style={{ marginRight: '1px' }}></i> Xem Video
                                                                </Link>

                                                            </h4>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div> : <div>
                                        <p>Ngày mua: {stringDate}</p>
                                        <p>Tổng tiền: {course?.price + ' VNĐ'}</p>
                                        <button type="button" onClick={() => onSubmit(course)} className="item-btn" style={{ display: 'inline-block', padding: '8px 15px', backgroundColor: '#3498db', color: '#ffffff', borderRadius: '5px', textDecoration: 'none', transition: 'background-color 0.3s ease' }}>
                                            <i className="fa fa-cart-plus" style={{ marginRight: '5px' }}></i> Mua khóa học
                                        </button>
                                    </div>
                                }


                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default DetailCourse;
