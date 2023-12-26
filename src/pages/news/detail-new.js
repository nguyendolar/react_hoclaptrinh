// src/pages/Home.js
import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Link, useParams } from "react-router-dom";
import { getNewsDetail } from "../../services/news/news.service";

const DetailNew = () => {
    const [news, setNews] = React.useState(null);
    const { id } = useParams();
    React.useEffect(() => {
        const fetchData = async () => {
            try
            {
                const result = await getNewsDetail(id);
                console.log("data", result)
                // Cập nhật state với dữ liệu nhận được
                setNews(result.data);
            } catch (error)
            {
                console.error('Error fetching data:', error);
            }
        };
        // Gọi hàm fetchData
        fetchData();
    }, [id])
  return (
    <div>
      <Header/>
      <main>
      <section className="single-blog-wrap-layout1">
    <section className="single-blog-wrap-layout2">
        <div className="container">
            <div className="single-blog-box-layout2">
                <div className="blog-banner">
                    <img src="https://dotnetguru.org/wp-content/uploads/2023/06/tim-hieu-ngon-ngu-html.jpg" alt="blog" 
                    style={{ width: '100%', height: '450px' }}/>
                </div>
                <div className="single-blog-content">
                    <div className="blog-entry-content">
                        <h2 className="item-title">{news?.title}</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div className="container">
        <div className="row gutters-50">
            <div className="col-lg-12">
                <div className="single-blog-box-layout1">
                    <div className="blog-details">
                       {/* Nội dung */}
                      {news?.content}

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
