// src/pages/Home.js
import React, { useState } from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { forgotPassword } from '../services/authentication/authentication.service.js';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const onSubmit = async () => {
        if (email === '')
        {
            toast.error("Cần điền đầy đủ thông tin");
        } else
        {
            const payload = {
                email: email,
            }
            const data = await forgotPassword(payload);
            if (data?.status === 200)
            {
                localStorage.setItem("token", data?.data?.jwtToken);
                toast.success("Vui lòng check mail để nhận thông tin");
                setEmail("")
                // setIsAuthenticated(true);
            } else
            {
                toast.error("Có lỗi");
            }
        }
    }

    // React.useEffect(() => {
    //     let token = localStorage.getItem("token");
    //     if (token !== null)
    //     {
    //         setIsAuthenticated(false);
    //     }
    // }, [])
    return (
        <div>
            <ToastContainer />
            <Header />
            <main>
                <section className="blog-wrap-layout9">
                    <div className="container">
                        <div className="section-heading-3">
                            <h2>Quên mật khẩu</h2>
                        </div>
                        <div className="row gutters-50">
                            <div className="col-lg-12">
                                <div className="single-blog-box-layout1">
                                    <div className="blog-form">
                                        <div className="section-heading-4 heading-dark">
                                            <h3 className="item-heading">Nhập email đăng ký tài khoản</h3>
                                        </div>
                                        <form className="contact-form-box" action="/Authentication/Login" method="post">
                                            <div className="row gutters-15">
                                                <div className="col-md-12 form-group">
                                                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" name="Email" required="" />
                                                </div>

                                                <div className="col-4 form-group">
                                                    <button type="button" onClick={() => onSubmit()} className="item-btn">Gửi</button>
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

export default ForgotPassword;
