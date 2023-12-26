// Header.js
import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { getCourseType } from "../../services/courseType/courseType.service";
import { jwtDecode } from "jwt-decode";
const Header = () => {
    const [email, setEmail] = React.useState("");
    const [courseTypes, setCourseTypes] = React.useState([]);
    const navigate = useNavigate();
    React.useEffect(() => {
        let token = localStorage.getItem("token");
        if (token != null)
        {
            const decoded = jwtDecode(token);
            console.log(decoded?.sub)
            setEmail(decoded?.sub);
        }
    }, [])
    React.useEffect(() => {
        const fetchData = async () => {
            try
            {
                const result = await getCourseType();
                console.log("data", result)
                // Cập nhật state với dữ liệu nhận được
                setCourseTypes(result.data);
            } catch (error)
            {
                console.error('Error fetching data:', error);
            }
        };

        // Gọi hàm fetchData
        fetchData();
    }, [])
    const onLogout = () => {
        localStorage.removeItem("token");
        navigate("/authen");
    }
    return (
        <header className="has-mobile-menu">
            <div id="header-middlebar" className="pt--29 pb--29 bg--light border-bootom border-color-accent2">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-4">
                            <div className="header-action-items">
                                <ul>
                                    <li className="item-social-layout2"> <Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li className="item-social-layout2"> <Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                    <li className="item-social-layout2"> <Link to="#"><i className="fab fa-instagram"></i></Link></li>
                                    <li className="item-social-layout2"> <Link to="#"><i className="fab fa-youtube"></i></Link></li>
                                    <li className="item-social-layout2"> <Link to="#"><i className="fas fa-rss"></i></Link></li>
                                    <li className="item-social-layout2"> <Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                    <li className="item-social-layout2"> <Link to="#"><i className="fab fa-google-plus-g"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 d-flex justify-content-center">
                            <div className="logo-area">
                                <Link to="/" className="temp-logo" id="temp-logo">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPJZg-cxm8BON0iDBiVCSAa6vRk3JyZtEDbw&usqp=CAU" alt="logo" className="img-fluid" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 d-flex justify-content-end">
                            <div className="header-action-items">
                                <ul>
                                    <li className="header-search-box divider-style-border">
                                        <Link to="#header-search" title="Search">
                                            <i className="flaticon-magnifying-glass"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="rt-sticky-placeholder"></div>
            <div id="header-menu" className="header-menu menu-layout1 bg--light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav id="dropdown" className="template-main-menu">
                                <ul>
                                    <li className="hide-on-mobile-menu">
                                        <Link to="/">Trang chủ</Link>
                                    </li>
                                    <li>
                                        <Link to="/courseall">Danh mục khoá học</Link>
                                        <ul className="dropdown-menu-col-1">
                                            {courseTypes && courseTypes.map((item) => (
                                                <li key={item.courseTypeId}>
                                                    <Link to={`/course-by-type/${item.courseTypeId}/${item.typeName}`}>{item.typeName}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/courseall">Khoá học </Link>
                                        <ul className="dropdown-menu-col-1">
                                            <li>
                                                <Link to={`/course-by-isFree/1`}>Miễn phí </Link>
                                            </li>
                                            <li>
                                                <Link to={`/course-by-isFree/0`}>Có phí</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/news">Tin tức</Link>
                                    </li>
                                    {email != "" ? <li>
                                        <Link to={`/profile/${email}`}>Hồ sơ cá nhân</Link>
                                        <ul className="dropdown-menu-col-1">
                                            <li>
                                                <a type="button" onClick={() => onLogout()}>Đăng xuất</a>
                                            </li>
                                        </ul>
                                    </li> : <li>
                                        <Link to="/authen">Đăng ký / Đăng nhập</Link>
                                    </li>}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;