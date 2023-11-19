// src/pages/Home.js
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import {Link } from "react-router-dom";

const Video = () => {
  return (
    <div>
      <Header />
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
                           
                                <li><i class="fas fa-calendar-alt"></i>Miễn phí </li>

                            <li><i class="far fa-clock"></i>Lập trình android</li>
                        </ul>
                        <h2 class="item-title">Bài 1: Làm quen với android</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="container">
        <div class="row gutters-50">
            <div class="col-lg-12">
                <div class="single-blog-box-layout1">
                    <div class="blog-details">
                        <iframe width="100%" height="621" src="https://www.youtube.com/embed/P60kcSaeFmg?si=fFFHQ79f9XMpVjSE"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                    </div>

                </div>
            </div>
            <div class="col-lg-12 sidebar-widget-area sidebar-break-md">
                <div class="widget">
                    <div class="section-heading heading-dark">
                        <h3 class="item-heading">Danh sách Video khác trong khóa học </h3>
                    </div>
                    <div class="widget-latest">
                        <div class="row gutters-50">
                            
                        <div className="col-lg-6" style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
      <div className="item-img" style={{ marginRight: '15px', marginTop: '5px', position: 'relative', overflow: 'hidden' }}>
        <Link to="/video">
          <img
            src="https://png.pngtree.com/png-vector/20230206/ourlarge/pngtree-video-player-3d-icon-png-image_6585971.png"
            alt="Post"
            style={{ width: '140px', height: '77px', objectFit: 'cover' }}
          />
        </Link>
      </div>
      <div className="item-content" style={{ flex: 1 }}>
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
          <a href="#" style={{ color: '#111111' }}>
            Bài 2 : Tiếp theo
          </a>
          <br />
          <Link to="/video" style={{ color: '#111111' }} className="item-btn">
            Xem Video <i className="fas fa-play"></i>
          </Link>
        </h4>
      </div>
    </div>

    <div className="col-lg-6" style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
      <div className="item-img" style={{ marginRight: '15px', marginTop: '5px', position: 'relative', overflow: 'hidden' }}>
        <Link to="/video">
          <img
            src="https://png.pngtree.com/png-vector/20230206/ourlarge/pngtree-video-player-3d-icon-png-image_6585971.png"
            alt="Post"
            style={{ width: '140px', height: '77px', objectFit: 'cover' }}
          />
        </Link>
      </div>
      <div className="item-content" style={{ flex: 1 }}>
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
          <a href="#" style={{ color: '#111111' }}>
            Bài 2 : Tiếp theo
          </a>
          <br />
          <Link to="/video" style={{ color: '#111111' }} className="item-btn">
            Xem Video <i className="fas fa-play"></i>
          </Link>
        </h4>
      </div>
    </div>

    <div className="col-lg-6" style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
      <div className="item-img" style={{ marginRight: '15px', marginTop: '5px', position: 'relative', overflow: 'hidden' }}>
        <Link to="/video">
          <img
            src="https://png.pngtree.com/png-vector/20230206/ourlarge/pngtree-video-player-3d-icon-png-image_6585971.png"
            alt="Post"
            style={{ width: '140px', height: '77px', objectFit: 'cover' }}
          />
        </Link>
      </div>
      <div className="item-content" style={{ flex: 1 }}>
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
          <a href="#" style={{ color: '#111111' }}>
            Bài 2 : Tiếp theo
          </a>
          <br />
          <Link to="/video" style={{ color: '#111111' }} className="item-btn">
            Xem Video <i className="fas fa-play"></i>
          </Link>
        </h4>
      </div>
    </div>

                        </div>
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

export default Video;
