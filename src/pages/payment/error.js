import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { jwtDecode } from "jwt-decode";
import { getCourseDetail } from "../../services/course/course.service.js";
const Error = () => {
    const [course, setCourse] = React.useState(null);
    const [email, setEmail] = React.useState("");
    const [stringDate, setStringDate] = React.useState("");
    React.useEffect(() => {
        const url = new URL(window.location.href);
        const searchParams = new URLSearchParams(url.search);
        let token = localStorage.getItem("token");
        const decoded = jwtDecode(token);
        setEmail(decoded?.sub)
        const fetchData = async () => {
            try
            {
                let courseId = searchParams.get('courseId');
                const result = await getCourseDetail(courseId);
                console.log("data", result)
                // Cập nhật state với dữ liệu nhận được
                setCourse(result.data);
            } catch (error)
            {
                console.error('Error fetching data:', error);
            }
        };
        // Gọi hàm fetchData
        fetchData();
    }, [])
    return(
        <div>
        <Header />
        <main>
            <section className="blog-wrap-layout9">
                <div className="container">
                <div style={styles.container}>
            <h2 style={styles.heading}>Thanh Toán Thất Bại!</h2>

            <p style={styles.text}>Rất tiếc, có vấn đề xảy ra trong quá trình thanh toán.</p>

            <div style={styles.orderDetails}>
                <h3 style={styles.subHeading}>Thông Tin Đơn Hàng</h3>
                <p style={styles.orderInfo}>Khóa học: {course?.courseName}</p>
                <p style={styles.orderInfo}>Tổng giá: {course?.price + ' VNĐ'}</p>

                <h3 style={styles.subHeading}>Thông tin thanh toán:</h3>
                <p style={styles.orderInfo}>Email: {email}</p>
            </div>

            <p style={styles.text}>Vui lòng kiểm tra lại thông tin thanh toán hoặc thử lại sau.</p>
            <Link to={`/detail-course/${course?.courseId}`} className="item-btn" style={{ display: 'inline-block', padding: '8px 15px', backgroundColor: '#3498db', color: '#ffffff', borderRadius: '5px', textDecoration: 'none', transition: 'background-color 0.3s ease' }}>
                                                <i className="fa-solid fa-backward-step" style={{ marginRight: '5px' }}></i> Quay lại khóa học
                                            </Link>
        </div>
                </div>
            </section>

        </main>
        <Footer />
    </div>
)
}
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
      color: '#f44336',
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
export default Error