// src/pages/Home.js
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import {Link } from "react-router-dom";
const DetailCourse = () => {
  return (
    <div>
      <Header/>
      <main>
      <section class="single-blog-wrap-layout1">

    <section class="single-blog-wrap-layout2">
        <div class="container">
            <div class="single-blog-box-layout2">
                <div class="blog-banner">
                    <img src="https://dotnetguru.org/wp-content/uploads/2023/06/tim-hieu-ngon-ngu-html.jpg" alt="blog" 
                    style={{ width: '100%', height: '450px' }}/>
                </div>
                <div class="single-blog-content">
                    <div class="blog-entry-content">
                        <ul class="entry-meta meta-color-dark">

                            <li><i class="fas fa-tag"></i>Lập trình ứng dụng</li>
                                <li><i class="fas fa-calendar-alt"></i>Có phí : 200.000 VNĐ</li>
                            <li><i class="far fa-clock"></i>20 Videos</li>
                        </ul>
                        <h2 class="item-title">Lập trình Android</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="container">
        <div class="row gutters-50">
            <div class="col-lg-8">
                <div class="single-blog-box-layout1">
                    <div class="blog-details">
                        Mô tả khóa học ở đây
                    </div>

                </div>
            </div>
            <div class="col-lg-4 sidebar-widget-area sidebar-break-md">
                <div class="widget">
                    <div class="section-heading heading-dark">
                        <h3 class="item-heading">Danh sách Video </h3>
                    </div>
                        <div class="widget-latest">
                            <ul class="block-list">
                                    <li class="single-item">
                                        <div class="item-img">
                                            <Link to="/video"><img src="https://png.pngtree.com/png-vector/20230206/ourlarge/pngtree-video-player-3d-icon-png-image_6585971.png" alt="Post"
                                            style={{ width: '140px', height: '77px !important' }}/></Link>
                                        </div>
                                        <div class="item-content">
                                            <h4 class="item-title">
                                                <Link to="/video">
                                                    Bài 1: Làm quen với android
                                                </Link>
                                                <br />
                                            </h4>
                                        </div>
                                    </li>
                                    <li class="single-item">
                                        <div class="item-img">
                                            <Link to="/video"><img src="https://png.pngtree.com/png-vector/20230206/ourlarge/pngtree-video-player-3d-icon-png-image_6585971.png" alt="Post"
                                            style={{ width: '140px', height: '77px !important' }}/></Link>
                                        </div>
                                        <div class="item-content">
                                            <h4 class="item-title">
                                                <Link to="/video">
                                                    Bài 1: Làm quen với android
                                                </Link>
                                                <br />
                                            </h4>
                                        </div>
                                    </li>
                                    <li class="single-item">
                                        <div class="item-img">
                                            <Link to="/video"><img src="https://png.pngtree.com/png-vector/20230206/ourlarge/pngtree-video-player-3d-icon-png-image_6585971.png" alt="Post"
                                            style={{ width: '140px', height: '77px !important' }}/></Link>
                                        </div>
                                        <div class="item-content">
                                            <h4 class="item-title">
                                                <Link to="/video">
                                                    Bài 1: Làm quen với android
                                                </Link>
                                                <br />
                                            </h4>
                                        </div>
                                    </li>
                                    <li class="single-item">
                                        <div class="item-img">
                                            <Link to="/video"><img src="https://png.pngtree.com/png-vector/20230206/ourlarge/pngtree-video-player-3d-icon-png-image_6585971.png" alt="Post"
                                            style={{ width: '140px', height: '77px !important' }}/></Link>
                                        </div>
                                        <div class="item-content">
                                            <h4 class="item-title">
                                                <Link to="/video">
                                                    Bài 1: Làm quen với android
                                                </Link>
                                                <br />
                                            </h4>
                                        </div>
                                    </li>
                           
                            </ul>
                        </div>
                </div>

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
