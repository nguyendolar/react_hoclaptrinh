// src/pages/Home.js
import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Link, useNavigate } from "react-router-dom";
const Success = () => {
    const navigate = useNavigate();
    React.useEffect(() => {
        const url = new URL(window.location.href);
        console.log("url", url);
        const searchParams = new URLSearchParams(url.search);
        console.log("searchParams", searchParams);
        console.log("paymentId", searchParams.get('paymentId'))
        console.log("PayerID", searchParams.get('PayerID'))
    }, [])

    return (
        <div>
            <Header />
            <main>
                <section className="blog-wrap-layout9">
                    <div className="container">
                        <div className="section-heading-3">
                            <h2>Thành công </h2>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default Success;
