// src/pages/Home.js
import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import {Link } from "react-router-dom";
const DetailCourse = () => {
  return (
    <div>
      <Header/>
      <main>
      <section className="single-blog-wrap-layout1">

    <section className="single-blog-wrap-layout2">
        <div className="container">
            <div className="single-blog-box-layout2">
                <div className="blog-banner">
                    <img src="https://dotnetguru.org/wp-content/uploads/2023/06/tim-hieu-ngon-ngu-html.jpg" alt="blog" 
                    style={{ width: '100%', height: '450px' }}/>
                </div>
                <div className="single-blog-content">
                    <div className="blog-entry-content">
                        <ul className="entry-meta meta-color-dark">

                            <li><i className="fas fa-tag"></i>Lập trình ứng dụng</li>
                                <li><i className="fas fa-calendar-alt"></i>Có phí : 200.000 VNĐ</li>
                            <li><i className="far fa-clock"></i>20 Videos</li>
                        </ul>
                        <h2 className="item-title">Lập trình Android</h2>
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
                        Mô tả khóa học ở đây
                    </div>

                </div>
            </div>
            <div className="col-lg-4 sidebar-widget-area sidebar-break-md">
                <div className="widget">
                    <div className="section-heading heading-dark">
                        <h3 className="item-heading">Danh sách Video </h3>
                    </div>
                        <div className="widget-latest">
                            <ul className="block-list">
                                    <li className="single-item">
                                        <div className="item-img">
                                            <Link to="/video"><img src="https://png.pngtree.com/png-vector/20230206/ourlarge/pngtree-video-player-3d-icon-png-image_6585971.png" alt="Post"
                                            style={{ width: '140px', height: '77px !important' }}/></Link>
                                        </div>
                                        <div className="item-content">
                                            <h4 className="item-title">
                                                <Link to="/video">
                                                    Bài 1: Làm quen với android
                                                </Link>
                                                <br />
                                            </h4>
                                        </div>
                                    </li>
                                    <li className="single-item">
                                        <div className="item-img">
                                            <Link to="/video"><img src="https://png.pngtree.com/png-vector/20230206/ourlarge/pngtree-video-player-3d-icon-png-image_6585971.png" alt="Post"
                                            style={{ width: '140px', height: '77px !important' }}/></Link>
                                        </div>
                                        <div className="item-content">
                                            <h4 className="item-title">
                                                <Link to="/video">
                                                    Bài 1: Làm quen với android
                                                </Link>
                                                <br />
                                            </h4>
                                        </div>
                                    </li>
                                    <li className="single-item">
                                        <div className="item-img">
                                            <Link to="/video"><img src="https://png.pngtree.com/png-vector/20230206/ourlarge/pngtree-video-player-3d-icon-png-image_6585971.png" alt="Post"
                                            style={{ width: '140px', height: '77px !important' }}/></Link>
                                        </div>
                                        <div className="item-content">
                                            <h4 className="item-title">
                                                <Link to="/video">
                                                    Bài 1: Làm quen với android
                                                </Link>
                                                <br />
                                            </h4>
                                        </div>
                                    </li>
                                    <li className="single-item">
                                        <div className="item-img">
                                            <Link to="/video"><img src="https://png.pngtree.com/png-vector/20230206/ourlarge/pngtree-video-player-3d-icon-png-image_6585971.png" alt="Post"
                                            style={{ width: '140px', height: '77px !important' }}/></Link>
                                        </div>
                                        <div className="item-content">
                                            <h4 className="item-title">
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
