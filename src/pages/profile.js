// src/pages/Home.js
import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const Profile = () => {
  return (
    <div>
      <Header />
      <main>
      <section class="blog-wrap-layout9">
    <div class="container">
        <div class="section-heading-3">
            <h2>Hồ sơ cá nhân</h2>
        </div>
        <div class="row gutters-50">
            <div class="col-lg-7">
                <div class="single-blog-box-layout1">
                    <div class="blog-form">
                        <div class="section-heading-4 heading-dark">
                            <h3 class="item-heading">Thông tin</h3>
                        </div>
                        <form class="contact-form-box" action="" method="post">
                            <input type="hidden" value="" name="UserId" />
                            <div class="row gutters-15">
                                <div class="col-md-6 form-group">
                                    <input type="text" value="Lê Văn An" class="form-control" name="FullName" required=""/>
                                </div>
                                <div class="col-md-6 form-group">
                                    <input type="text" value="039430873746" class="form-control" name="PhoneNumber" required=""/>
                                </div>
                                <div class="col-md-6 form-group">
                                    <input type="email" value="levana@gmail.com" class="form-control" name="Email" readonly/>
                                </div>
                                <div class="col-md-6 form-group">
                                    <input type="text" value="Hà Nội" class="form-control" name="Address" required=""/>
                                </div>
                                <div class="col-12 form-group">
                                    <button type="submit" class="item-btn">Cập nhật</button>
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
                            <h3 class="item-heading">Đổi mật khẩu</h3>
                        </div>
                        <form class="contact-form-box" action="" method="post">
                            <input type="hidden" value="@ViewBag.User.UserId" name="UserId" />
                            <div class="row gutters-15">
                                <div class="col-md-12 form-group">
                                    <input type="password" placeholder="Nhập mật khẩu mới" class="form-control" name="password" required=""/>
                                </div>
                                <div class="col-md-12 form-group">
                                    <input type="password" placeholder="Nhập lại mật khẩu mới" class="form-control" name="rePassword" required=""/>
                                </div>
                                <div class="col-12 form-group">
                                    <button type="submit" class="item-btn">Xác nhận</button>
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

export default Profile;
