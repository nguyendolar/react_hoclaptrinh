// src/pages/Home.js
import React, { useState } from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { postLogin, register } from '../services/authentication/authentication.service.js'

const Authen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [emailRe, setEmailRe] = useState("");
    const [passwordRe, setPasswordRe] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("1");
    const onLogin = async () => {
        const payload = {
            email: email,
            password: password
        }
        const data = await postLogin(payload);
        console.log("data", data)
    }
    const onRegister = async () => {
        const payload = {
            "fullName": fullName,
            "email": emailRe,
            "password": passwordRe,
            "phoneNumber": phoneNumber,
            "address": address,
            "gender": gender,
            "status": 1
        }

        const data = await register(payload);
        console.log("data", data)
    }
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
                                                    <input type="text" placeholder="Họ tên" value={fullName} onChange={(e) => setFullName(e.target.value)} class="form-control" name="FullName" required="" />
                                                </div>
                                                <div class="col-md-6 form-group">
                                                    <input type="text" placeholder="Số điện thoại" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} class="form-control" name="PhoneNumber" required="" />
                                                </div>
                                                <div class="col-md-6 form-group">
                                                    <input type="email" placeholder="Email" value={emailRe} onChange={(e) => setEmailRe(e.target.value)} class="form-control" name="Email" required="" />
                                                </div>
                                                <div class="col-md-6 form-group">
                                                    <input type="password" placeholder="Mật khẩu" class="form-control" value={passwordRe} onChange={(e) => setPasswordRe(e.target.value)} name="Password" required="" />
                                                </div>
                                                <div class="col-md-12 form-group">
                                                    <input type="text" placeholder="Địa chỉ" class="form-control" value={address} onChange={(e) => setAddress(e.target.value)} name="Address" required="" />
                                                </div>
                                                <div class="col-12 form-group">
                                                    <button type="button" onClick={() => onRegister()} class="item-btn">Đăng ký</button>
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
                                                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" name="Email" required="" />
                                                </div>
                                                <div class="col-md-12 form-group">
                                                    <input type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" name="Password" required="" />
                                                </div>
                                                <div class="col-4 form-group">
                                                    <button type="button" onClick={() => onLogin()} class="item-btn">Đăng nhập</button>
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
