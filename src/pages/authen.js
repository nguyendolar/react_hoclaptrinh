// src/pages/Home.js
import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const Authen = () => {
  return (
    <div>
      <Header />
      <main>
      <section class="blog-wrap-layout9">
    <div class="container">
        <div class="section-heading-3">
            <h2>Đăng ký/ Đăng nhập</h2>
        </div>
        <div class="row gutters-50">
            <div class="col-lg-7">
                <div class="single-blog-box-layout1">
                    <div class="blog-form">
                        <div class="section-heading-4 heading-dark">
                            <h3 class="item-heading">Đăng ký</h3>
                        </div>
                        <form class="contact-form-box" action="/Authentication/Register" method="post">
                            <div class="row gutters-15">
                                <div class="col-md-6 form-group">
                                    <input type="text" placeholder="Họ tên" class="form-control" name="FullName" required=""/>
                                </div>
                                <div class="col-md-6 form-group">
                                    <input type="text" placeholder="Số điện thoại" class="form-control" name="PhoneNumber" required=""/>
                                </div>
                                <div class="col-md-6 form-group">
                                    <input type="email" placeholder="Email" class="form-control" name="Email" required=""/>
                                </div>
                                <div class="col-md-6 form-group">
                                    <input type="password" placeholder="Mật khẩu" class="form-control" name="Password" required=""/>
                                </div>
                                <div class="col-md-12 form-group">
                                    <input type="text" placeholder="Địa chỉ" class="form-control" name="Address" required=""/>
                                </div>
                                <div class="col-12 form-group">
                                    <button type="submit" class="item-btn">Đăng ký</button>
                                </div>
                            </div>
                            <div class="form-response"></div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-5">
                <div class="single-blog-box-layout1">
                    <div class="blog-form">
                        <div class="section-heading-4 heading-dark">
                            <h3 class="item-heading">Đăng nhập</h3>
                        </div>
                        <form class="contact-form-box" action="/Authentication/Login" method="post">
                            <div class="row gutters-15">
                                <div class="col-md-12 form-group">
                                    <input type="email" placeholder="Email" class="form-control" name="Email" required=""/>
                                </div>
                                <div class="col-md-12 form-group">
                                    <input type="password" placeholder="Mật khẩu" class="form-control" name="Password" required=""/>
                                </div>
                                <div class="col-4 form-group">
                                    <button type="submit" class="item-btn">Đăng nhập</button>
                                </div>
                                <div class="col-3 form-group">
                                </div>
                                <div class="col-5 form-group">
                                    <a href="/Authentication/ForgotPassword" class="item-btn">Quên mật khẩu</a>
                                </div>
                            </div>
                            <div class="form-response"></div>
                        </form>
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

export default Authen;
