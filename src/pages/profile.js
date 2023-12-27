// src/pages/Home.js
import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { Link, useParams } from "react-router-dom";
import { getUserByEmail, updateProfile, updatePassword } from "../services/user/user.service.js"
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
    const [user, setUser] = React.useState(null);
    const [token, setToken] = React.useState(null);
    const [passwordNew, setPasswordNew] = React.useState("");
    const [rePasswordNew, setRePasswordNew] = React.useState("");
    const { email } = useParams();
    React.useEffect(() => {
        let token = localStorage.getItem("token");
        console.log("token", token)
        setToken(token);
        if (token != null)
        {
            const fetchData = async () => {
                try
                {
                    const result = await getUserByEmail(email, token);
                    console.log("data", result)
                    // Cập nhật state với dữ liệu nhận được
                    setUser(result.data);
                } catch (error)
                {
                    console.error('Error fetching data:', error);
                }
            };
            // Gọi hàm fetchData
            fetchData();
        }
    }, [email])

    const onUpdate = async (obj) => {
        console.log("obj", obj)
        if (obj.phoneNumber === '' || obj.address === '' || obj.fullName === '')
        {
            toast.error("Cần điền đầy đủ thông tin");
        } else
        {
            const body = {
                phoneNumber: obj.phoneNumber,
                address: obj.address,
                fullName: obj.fullName
            }
            const data = await updateProfile(obj.userId, token, body);
            if (data?.status === 200)
            {
                toast.success("Cập nhật thành công");
                console.log("data", data)
            } else
            {
                toast.error("Có lỗi xảy ra  ");
                console.log("data", data)
            }
        }
    }

    const onChangePassword = async () => {
        if (passwordNew === "" || rePasswordNew === "")
        {
            toast.error("Cần điền đầy đủ thông tin");
            return;
        }
        if (passwordNew !== rePasswordNew)
        {
            toast.error("Hai mật khẩu không trùng khớp");
            return;
        }
        let body = {
            password: passwordNew
        }

        const data = await updatePassword(user.userId, token, body);
        if (data?.status === 200)
        {
            toast.success("Cập nhật thành công");
            setPasswordNew("");
            setRePasswordNew("")
            console.log("data", data)
        } else
        {
            toast.error("Có lỗi xảy ra  ");
            console.log("data", data)
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };
    return (
        <div>
            <ToastContainer />
            <Header />
            <main>
                <section className="blog-wrap-layout9">
                    <div className="container">
                        <div className="section-heading-3">
                            <h2>Hồ sơ cá nhân</h2>
                        </div>
                        <div className="row gutters-50">
                            <div className="col-lg-7">
                                <div className="single-blog-box-layout1">
                                    <div className="blog-form">
                                        <div className="section-heading-4 heading-dark">
                                            <h3 className="item-heading">Thông tin</h3>
                                        </div>
                                        <form className="contact-form-box" action="" method="post">
                                            <input type="hidden" value="" name="UserId" />
                                            <div className="row gutters-15">
                                                <div className="col-md-6 form-group">
                                                    <input type="text" value={user?.fullName || ''} onChange={(e) => handleInputChange(e)} className="form-control" name="fullName" required="" />
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <input type="text" value={user?.phoneNumber} onChange={(e) => handleInputChange(e)} className="form-control" name="phoneNumber" required="" />
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <input type="email" value={user?.email} onChange={(e) => handleInputChange(e)} className="form-control" name="email" disabled />
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <input type="text" value={user?.address} onChange={(e) => handleInputChange(e)} className="form-control" name="address" required="" />
                                                </div>
                                                <div className="col-12 form-group">
                                                    <button type="button" onClick={() => onUpdate(user)} className="item-btn">Cập nhật</button>
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
                                            <h3 className="item-heading">Đổi mật khẩu</h3>
                                        </div>
                                        <form className="contact-form-box" action="" method="post">
                                            <input type="hidden" value="@ViewBag.User.UserId" name="UserId" />
                                            <div className="row gutters-15">
                                                <div className="col-md-12 form-group">
                                                    <input type="password" placeholder="Nhập mật khẩu mới" value={passwordNew} onChange={(e) => setPasswordNew(e.target.value)} className="form-control" name="password" required="" />
                                                </div>
                                                <div className="col-md-12 form-group">
                                                    <input type="password" placeholder="Nhập lại mật khẩu mới" value={rePasswordNew} onChange={(e) => setRePasswordNew(e.target.value)} className="form-control" name="rePassword" required="" />
                                                </div>
                                                <div className="col-12 form-group">
                                                    <button type="button" onClick={() => onChangePassword()} className="item-btn">Xác nhận</button>
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

export default Profile;
