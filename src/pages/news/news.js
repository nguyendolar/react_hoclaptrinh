// src/pages/Home.js
import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Link } from "react-router-dom";
import { getNews } from "../../services/news/news.service.js"

const News = () => {
    const [newss, setNewss] = React.useState([]);
    React.useEffect(() => {
        const fetchData = async () => {
            try
            {
                const result = await getNews();
                console.log("data", result)
                // Cập nhật state với dữ liệu nhận được
                setNewss(result.data);
            } catch (error)
            {
                console.error('Error fetching data:', error);
            }
        };

        // Gọi hàm fetchData
        fetchData();
    }, [])
    return (
        <div>
            <Header />
            <main>
                <section className="blog-wrap-layout9">
                    <div className="container">
                        <div className="section-heading-3">
                            <h2>Danh sách tin tức trong hệ thống </h2>

                        </div>
                        <div className="row gutters-40 menu-list" id="no-equal-gallery">
                            {newss && newss.map((item) => (
                                <div key={item.newsId} className="col-lg-4 col-md-6 col-sm-6 col-12 no-equal-item">
                                    <div className="blog-box-layout5">
                                        <div className="item-img">
                                            <Link to={`/detailnew/${item.newsId}`}><img src={item.image} alt="Blog"
                                                style={{ width: '362px', height: '207px' }} /></Link>
                                            <Link to={`/detailnew/${item.newsId}`} className="hover-icon">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </Link>
                                        </div>
                                        <div className="item-content">

                                            <h3 className="item-title">
                                                <Link to={`/detailnew/${item.newsId}`}>
                                                    {item.title}
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))}


                        </div>
                        {/* <div className="pagination-layout1">
                <ul>
                    <li className="active"><a href="">1</a></li>
                    <li className="active"><a href="">2</a></li>
                </ul>
            </div> */}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default News;
