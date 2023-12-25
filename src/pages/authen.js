// src/pages/Home.js
import React, { useState } from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { Route, withRouter,useNavigate} from "react-router-dom";
import { postLogin, register } from '../services/authentication/authentication.service.js';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Authen = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [emailRe, setEmailRe] = useState("");
    const [passwordRe, setPasswordRe] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("1");
    const navigate = useNavigate();
    const onLogin = async () => {
        if(email === '' || password === ''){
            toast.error("Cần điền đầy đủ thông tin");
        }else{
            const payload = {
                email: email,
                password: password
            }
            const data = await postLogin(payload);
            if(data?.status == 200){
                localStorage.setItem("token", data?.data?.jwtToken);
                toast.success("Đăng nhập thành công");
                setIsAuthenticated(true);
            }else{
                toast.error("Tài khoản mật khẩu không đúng");
            }
        }
    }
    const onRegister = async () => {
        if(fullName === '' || passwordRe === '' || emailRe === '' || phoneNumber === '' || address === ''){
            toast.error("Cần điền đầy đủ thông tin");
        } else {
            const payload = {
                fullName: fullName,
                email: emailRe,
                password: passwordRe,
                phoneNumber: phoneNumber,
                address: address,
                gender: gender,
                status: 1
            }
            const data = await register(payload);
            if(data?.status == 201){
                toast.success("Đăng ký thành công");
                setFullName("");
                setEmailRe("");
                setAddress("");
                setPasswordRe("");
                setPhoneNumber("");
            }else{
                toast.error("Email đã tồn tại");
            }
        }      
    }
    React.useEffect(() => {
       let token = localStorage.getItem("token");
       if(token != null){
        setIsAuthenticated(true);
       }
    },[])
    return (
        <div>
            <ToastContainer />
            <Header />
            <main>
                <section className="blog-wrap-layout9">
                    <div className="container">
                        <div className="section-heading-3">
                            <h2>Đăng ký/ Đăng nhập</h2>
                        </div>
                        <div className="row gutters-50">
                            <div className="col-lg-7">
                                <div className="single-blog-box-layout1">
                                    <div className="blog-form">
                                        <div className="section-heading-4 heading-dark">
                                            <h3 className="item-heading">Đăng ký</h3>
                                        </div>
                                        <form className="contact-form-box" action="/Authentication/Register" method="post">
                                            <div className="row gutters-15">
                                                <div className="col-md-6 form-group">
                                                    <input type="text" placeholder="Họ tên" value={fullName} onChange={(e) => setFullName(e.target.value)} className="form-control" name="FullName" required="" />
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <input type="text" placeholder="Số điện thoại" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="form-control" name="PhoneNumber" required="" />
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <input type="email" placeholder="Email" value={emailRe} onChange={(e) => setEmailRe(e.target.value)} className="form-control" name="Email" required="" />
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <input type="password" placeholder="Mật khẩu" className="form-control" value={passwordRe} onChange={(e) => setPasswordRe(e.target.value)} name="Password" required="" />
                                                </div>
                                                <div className="col-md-12 form-group">
                                                    <input type="text" placeholder="Địa chỉ" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} name="Address" required="" />
                                                </div>
                                                <div className="col-12 form-group">
                                                    <button type="button" onClick={() => onRegister()} className="item-btn">Đăng ký</button>
                                                </div>
                                            </div>
                                            <div className="form-response"></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="single-blog-box-layout1">
                                    <div className="blog-form">
                                        <div className="section-heading-4 heading-dark">
                                            <h3 className="item-heading">Đăng nhập</h3>
                                        </div>
                                        <form className="contact-form-box" action="/Authentication/Login" method="post">
                                            <div className="row gutters-15">
                                                <div className="col-md-12 form-group">
                                                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" name="Email" required="" />
                                                </div>
                                                <div className="col-md-12 form-group">
                                                    <input type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" name="Password" required="" />
                                                </div>
                                                <div className="col-4 form-group">
                                                    <button type="button" onClick={() => onLogin()} className="item-btn">Đăng nhập</button>
                                                </div>
                                                <div className="col-3 form-group">
                                                </div>
                                                <div className="col-5 form-group">
                                                    <a href="/Authentication/ForgotPassword" className="item-btn">Quên mật khẩu</a>
                                                </div>
                                            </div>
                                            <div className="form-response"></div>
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
