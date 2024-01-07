// src/pages/Home.js
import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { getCourseDetail } from "../../services/course/course.service.js";
import { Link, useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { executePayment } from '../../services/payment/payment.service.js';
const Success = () => {
    const [course, setCourse] = React.useState(null);
    const [courseId, setCourseId] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [stringDate, setStringDate] = React.useState("");
    React.useEffect(() => {
        const url = new URL(window.location.href);
        console.log("url", url);
        const searchParams = new URLSearchParams(url.search);
        console.log("searchParams", searchParams);
        console.log("paymentId", searchParams.get('paymentId'))
        console.log("PayerID", searchParams.get('PayerID'))
        console.log("courseId", searchParams.get('courseId'))
        let token = localStorage.getItem("token");
        const decoded = jwtDecode(token);
        setEmail(decoded?.sub)
        const fetchData = async () => {
            try
            {
                let courseId = searchParams.get('courseId');
                setCourseId(courseId);
                const result = await getCourseDetail(courseId);
                console.log("data", result)
                // Cập nhật state với dữ liệu nhận được
                setCourse(result.data);
                const payload = {
                    "totalPrice": result?.data?.price,
                    "userId": null,
                    "courseId": result?.data?.courseId,
                    "email": decoded?.sub,
                    "paymentId":searchParams.get('paymentId'),
                    "payerId":searchParams.get('PayerID')
                }
                const data = await executePayment(payload);
                console.log("data111", data)
            } catch (error)
            {
                console.error('Error fetching data:', error);
            }
        };
        // Gọi hàm fetchData
        fetchData();
    }, [])

    return (
        <div>
            <Header />
            <main>
                <section className="blog-wrap-layout9">
                    <div className="container">
                        <div style={styles.container}>
                            <h2 style={styles.heading}>Thanh Toán Thành Công!</h2>

                            <p style={styles.text}>Cảm ơn bạn đã mua khóa học của chúng tôi.</p>

                            <div style={styles.orderDetails}>
                                <h3 style={styles.subHeading}>Thông Tin Đơn Hàng</h3>
                                <p style={styles.orderInfo}>Khóa học: {course?.courseName}</p>
                                <p style={styles.orderInfo}>Tổng giá: {course?.price + ' VNĐ'}</p>

                                <h3 style={styles.subHeading}>Thông tin thanh toán:</h3>
                                <p style={styles.orderInfo}>Email: {email}</p>
                            </div>

                            <p style={styles.text}>Chúc bạn học tập tốt và thành công trên đường mình đã chọn.</p>
                            <Link to={`/detail-course/${courseId}`} className="item-btn" style={{ display: 'inline-block', padding: '8px 15px', backgroundColor: '#3498db', color: '#ffffff', borderRadius: '5px', textDecoration: 'none', transition: 'background-color 0.3s ease' }}>
                                                <i className="fa-solid fa-backward-step" style={{ marginRight: '5px' }}></i> Quay lại khóa học
                                            </Link>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};
const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f4f4',
      textAlign: 'center',
      padding: '20px',
      maxWidth: '400px',
      margin: '0 auto',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      color: '#4caf50',
    },
    text: {
      color: '#333',
      margin: '5px 0',
    },
    orderDetails: {
      borderTop: '1px solid #ddd',
      marginTop: '20px',
      paddingTop: '10px',
    },
    subHeading: {
      color: '#333',
      margin: '10px 0',
    },
    orderInfo: {
      margin: '5px 0',
      color: '#777',
    },
  };
export default Success;
