// src/pages/Home.js
import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import {Link } from "react-router-dom";

const CourseAll = () => {
  return (
    <div>
      <Header />
      <main>
      <section class="blog-wrap-layout9">
    <div class="container">
        <div class="section-heading-3">
            <h2>Danh sách khoá học trong hệ thống  </h2>

        </div>
            <div class="row gutters-40 menu-list" id="no-equal-gallery">
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 no-equal-item">
                        <div class="blog-box-layout5">
                            <div class="item-img">
                                <Link to="/detailcourse">
                                <img src="https://lh5.googleusercontent.com/e5VMd5dCOtigrMRvOum7SONS6I5ESzD2rPwuCBfgR3uBVUyEIJ_M-E6n3EQBLMUmqKfy-rkYy_jKHXpuMJ57uD2vF5uS1mc2JtMQBVl4Io1tsAKLnT4fEhTHdDOpF_pqRrf8cJuR" alt="Blog" 
                                style={{ width: '362px', height: '207px' }}/>
                                </Link>
                                <Link to="/detailcourse" class="hover-icon">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </Link>
                            </div>
                            <div class="item-content">
                                <ul class="entry-meta meta-color-dark">
                                    <li><i class="fas fa-tag"></i>Lập trình ứng dụng</li>
                                        <li><i class="fas fa-calendar-alt"></i>Miễn phí </li>
                                    <li><i class="far fa-clock"></i>20 Videos</li>
                                </ul>
                                <h3 class="item-title">
                                    <Link to="/detailcourse">
                                        Lập trình ứng dụng Android
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 no-equal-item">
                        <div class="blog-box-layout5">
                            <div class="item-img">
                                <Link to="/detailcourse">
                                <img src="https://lh5.googleusercontent.com/e5VMd5dCOtigrMRvOum7SONS6I5ESzD2rPwuCBfgR3uBVUyEIJ_M-E6n3EQBLMUmqKfy-rkYy_jKHXpuMJ57uD2vF5uS1mc2JtMQBVl4Io1tsAKLnT4fEhTHdDOpF_pqRrf8cJuR" alt="Blog" 
                                style={{ width: '362px', height: '207px' }}/>
                                </Link>
                                <Link to="/detailcourse" class="hover-icon">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </Link>
                            </div>
                            <div class="item-content">
                                <ul class="entry-meta meta-color-dark">
                                    <li><i class="fas fa-tag"></i>Lập trình ứng dụng</li>
                                        <li><i class="fas fa-calendar-alt"></i>Miễn phí </li>
                                    <li><i class="far fa-clock"></i>20 Videos</li>
                                </ul>
                                <h3 class="item-title">
                                    <Link to="/detailcourse">
                                        Lập trình ứng dụng Android
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 no-equal-item">
                        <div class="blog-box-layout5">
                            <div class="item-img">
                                <Link to="/detailcourse">
                                <img src="https://lh5.googleusercontent.com/e5VMd5dCOtigrMRvOum7SONS6I5ESzD2rPwuCBfgR3uBVUyEIJ_M-E6n3EQBLMUmqKfy-rkYy_jKHXpuMJ57uD2vF5uS1mc2JtMQBVl4Io1tsAKLnT4fEhTHdDOpF_pqRrf8cJuR" alt="Blog" 
                                style={{ width: '362px', height: '207px' }}/>
                                </Link>
                                <Link to="/detailcourse" class="hover-icon">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </Link>
                            </div>
                            <div class="item-content">
                                <ul class="entry-meta meta-color-dark">
                                    <li><i class="fas fa-tag"></i>Lập trình ứng dụng</li>
                                        <li><i class="fas fa-calendar-alt"></i>Miễn phí </li>
                                    <li><i class="far fa-clock"></i>20 Videos</li>
                                </ul>
                                <h3 class="item-title">
                                    <Link to="/detailcourse">
                                        Lập trình ứng dụng Android
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="pagination-layout1">
                <ul>
                            <li class="active"><a href="">1</a></li>
                            <li class="active"><a href="">2</a></li>
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
