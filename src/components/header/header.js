// Header.js
import React from 'react';
import {Link, useNavigate  } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
const Header = () => {
  const [user, setUser] = React.useState(null);
  const navigate = useNavigate();
  React.useEffect(() => {
    let token = localStorage.getItem("token");
    if(token != null){
        const decoded = jwtDecode(token);
        setUser(decoded?.sub);
    }
  },[])
  const onLogout = () => {
    localStorage.removeItem("token");
    navigate("/authen");
  }
  return (
    <header class="has-mobile-menu">
          <div id="header-middlebar" class="pt--29 pb--29 bg--light border-bootom border-color-accent2">
              <div class="container">
                  <div class="row d-flex align-items-center">
                      <div class="col-lg-4">
                          <div class="header-action-items">
                              <ul>
                                  <li class="item-social-layout2"> <Link to="#"><i class="fab fa-facebook-f"></i></Link></li>
                                  <li class="item-social-layout2"> <Link to="#"><i class="fab fa-twitter"></i></Link></li>
                                  <li class="item-social-layout2"> <Link to="#"><i class="fab fa-instagram"></i></Link></li>
                                  <li class="item-social-layout2"> <Link to="#"><i class="fab fa-youtube"></i></Link></li>
                                  <li class="item-social-layout2"> <Link to="#"><i class="fas fa-rss"></i></Link></li>
                                  <li class="item-social-layout2"> <Link to="#"><i class="fab fa-linkedin-in"></i></Link></li>
                                  <li class="item-social-layout2"> <Link to="#"><i class="fab fa-google-plus-g"></i></Link></li>
                              </ul>
                          </div>
                      </div>
                      <div class="col-lg-4 d-flex justify-content-center">
                          <div class="logo-area">
                              <Link to="/" class="temp-logo" id="temp-logo">
                                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPJZg-cxm8BON0iDBiVCSAa6vRk3JyZtEDbw&usqp=CAU" alt="logo" class="img-fluid"/>
                              </Link>
                          </div>
                      </div>
                      <div class="col-lg-4 d-flex justify-content-end">
                          <div class="header-action-items">
                              <ul>
                                  <li class="header-search-box divider-style-border">
                                      <Link to="#header-search" title="Search">
                                          <i class="flaticon-magnifying-glass"></i>
                                      </Link>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div id="rt-sticky-placeholder"></div>
          <div id="header-menu" class="header-menu menu-layout1 bg--light">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-12">
                          <nav id="dropdown" class="template-main-menu">
                              <ul>
                                  <li class="hide-on-mobile-menu">
                                      <Link to="/">Trang chủ</Link>
                                  </li>
                                  <li>
                                      <Link to="/courseall">Danh mục khoá học</Link>
                                      <ul class="dropdown-menu-col-1">
                                              <li>
                                                  <Link to="/courseall">Lập trình website</Link>
                                              </li>
                                              <li>
                                                <Link to="/courseall">Lập trình ứng dụng</Link>
                                            </li>
                                      </ul>
                                  </li>
                                  <li>
                                      <Link to="/courseall">Khoá học </Link>
                                      <ul class="dropdown-menu-col-1">
                                          <li>
                                              <Link to="/courseall">Miễn phí </Link>
                                          </li>
                                          <li>
                                              <Link to="/courseall">Có phí</Link>
                                          </li>
                                      </ul>
                                  </li>
                                  <li>
                                  <Link to="/news">Tin tức</Link>
                                  </li>
                                  {user != null ?  <li>
                                      <Link to="/profile">Hồ sơ cá nhân</Link>
                                      <ul class="dropdown-menu-col-1">
                                            <li>
                                                <a type="button" onClick={() => onLogout()}>Đăng xuất</a>
                                            </li>
                                      </ul>
                                  </li> :<li>
                                      <Link to="/authen">Đăng ký / Đăng nhập</Link>                                
                                  </li> }                                                                 
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