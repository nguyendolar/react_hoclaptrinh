// src/pages/Home.js
import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import {Link } from "react-router-dom";
import { getCourse} from "../services/course/course.service.js"

const CourseAll = () => {
  const [courses, setCourses] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
        try {        
          const result = await getCourse(); 
          console.log("data",result)
          // Cập nhật state với dữ liệu nhận được
          setCourses(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      // Gọi hàm fetchData
      fetchData();
  },[courses])
  return (
    <div>
      <Header />
      <main>
      <section className="blog-wrap-layout9">
    <div className="container">
        <div className="section-heading-3">
            <h2>Danh sách khoá học trong hệ thống  </h2>
        </div>
            <div className="row gutters-40 menu-list" id="no-equal-gallery">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 no-equal-item">
                        <div className="blog-box-layout5">
                            <div className="item-img">
                                <Link to="/detailcourse">
                                <img src="https://lh5.googleusercontent.com/e5VMd5dCOtigrMRvOum7SONS6I5ESzD2rPwuCBfgR3uBVUyEIJ_M-E6n3EQBLMUmqKfy-rkYy_jKHXpuMJ57uD2vF5uS1mc2JtMQBVl4Io1tsAKLnT4fEhTHdDOpF_pqRrf8cJuR" alt="Blog" 
                                style={{ width: '362px', height: '207px' }}/>
                                </Link>
                                <Link to="/detailcourse" className="hover-icon">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </Link>
                            </div>
                            <div className="item-content">
                                <ul className="entry-meta meta-color-dark">
                                    <li><i className="fas fa-tag"></i>Lập trình ứng dụng</li>
                                        <li><i className="fas fa-calendar-alt"></i>Miễn phí </li>
                                    <li><i className="far fa-clock"></i>20 Videos</li>
                                </ul>
                                <h3 className="item-title">
                                    <Link to="/detailcourse">
                                        Lập trình ứng dụng Android
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 no-equal-item">
                        <div className="blog-box-layout5">
                            <div className="item-img">
                                <Link to="/detailcourse">
                                <img src="https://lh5.googleusercontent.com/e5VMd5dCOtigrMRvOum7SONS6I5ESzD2rPwuCBfgR3uBVUyEIJ_M-E6n3EQBLMUmqKfy-rkYy_jKHXpuMJ57uD2vF5uS1mc2JtMQBVl4Io1tsAKLnT4fEhTHdDOpF_pqRrf8cJuR" alt="Blog" 
                                style={{ width: '362px', height: '207px' }}/>
                                </Link>
                                <Link to="/detailcourse" className="hover-icon">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </Link>
                            </div>
                            <div className="item-content">
                                <ul className="entry-meta meta-color-dark">
                                    <li><i className="fas fa-tag"></i>Lập trình ứng dụng</li>
                                        <li><i className="fas fa-calendar-alt"></i>Miễn phí </li>
                                    <li><i className="far fa-clock"></i>20 Videos</li>
                                </ul>
                                <h3 className="item-title">
                                    <Link to="/detailcourse">
                                        Lập trình ứng dụng Android
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 no-equal-item">
                        <div className="blog-box-layout5">
                            <div className="item-img">
                                <Link to="/detailcourse">
                                <img src="https://lh5.googleusercontent.com/e5VMd5dCOtigrMRvOum7SONS6I5ESzD2rPwuCBfgR3uBVUyEIJ_M-E6n3EQBLMUmqKfy-rkYy_jKHXpuMJ57uD2vF5uS1mc2JtMQBVl4Io1tsAKLnT4fEhTHdDOpF_pqRrf8cJuR" alt="Blog" 
                                style={{ width: '362px', height: '207px' }}/>
                                </Link>
                                <Link to="/detailcourse" className="hover-icon">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </Link>
                            </div>
                            <div className="item-content">
                                <ul className="entry-meta meta-color-dark">
                                    <li><i className="fas fa-tag"></i>Lập trình ứng dụng</li>
                                        <li><i className="fas fa-calendar-alt"></i>Miễn phí </li>
                                    <li><i className="far fa-clock"></i>20 Videos</li>
                                </ul>
                                <h3 className="item-title">
                                    <Link to="/detailcourse">
                                        Lập trình ứng dụng Android
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="pagination-layout1">
                <ul>
                            <li className="active"><a href="">1</a></li>
                            <li className="active"><a href="">2</a></li>
                </ul>
            </div>


    </div>
</section>
      </main>
      <Footer />
    </div>
  );
};

export default CourseAll;
