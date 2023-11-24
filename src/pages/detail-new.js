// src/pages/Home.js
import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const DetailNew = () => {
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
                        <h2 class="item-title">Tin tức về lập trình</h2>
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
                       {/* Nội dung */}
                       Nội dung tin tức ở đây


    {/* Nội dung */}
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

export default DetailNew;
