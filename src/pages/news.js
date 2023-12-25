// src/pages/Home.js
import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import {Link } from "react-router-dom";

const News = () => {
  return (
    <div>
      <Header />
      <main>
      <section className="blog-wrap-layout9">
    <div className="container">
        <div className="section-heading-3">
            <h2>Danh sách tin tức trong hệ thống </h2>

        </div>
            <div className="row gutters-40 menu-list" id="no-equal-gallery">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 no-equal-item">
                        <div className="blog-box-layout5">
                            <div className="item-img">
                                <Link to="/detailnew"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6MB5e369dNe_PTEsElaOD7B72I5cEQ1UvnA&usqp=CAU" alt="Blog" 
                                 style={{ width: '362px', height: '207px' }}/></Link>
                                <Link to="/detailnew" className="hover-icon">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </Link>
                            </div>
                            <div className="item-content">
                               
                                <h3 className="item-title">
                                    <Link to="/detailnew">
                                        Tin tức hôm nay
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 no-equal-item">
                        <div className="blog-box-layout5">
                            <div className="item-img">
                                <Link to="/detailnew"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6MB5e369dNe_PTEsElaOD7B72I5cEQ1UvnA&usqp=CAU" alt="Blog" 
                                 style={{ width: '362px', height: '207px' }}/></Link>
                                <Link to="/detailnew" className="hover-icon">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </Link>
                            </div>
                            <div className="item-content">
                               
                                <h3 className="item-title">
                                    <Link to="/detailnew">
                                        Tin tức hôm nay
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 no-equal-item">
                        <div className="blog-box-layout5">
                            <div className="item-img">
                                <Link to="/detailnew"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6MB5e369dNe_PTEsElaOD7B72I5cEQ1UvnA&usqp=CAU" alt="Blog" 
                                 style={{ width: '362px', height: '207px' }}/></Link>
                                <Link to="/detailnew" className="hover-icon">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </Link>
                            </div>
                            <div className="item-content">
                               
                                <h3 className="item-title">
                                    <Link to="/detailnew">
                                        Tin tức hôm nay
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

export default News;
