import React, { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        new Swiper('.home-slider', {
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }, []);

    return (
        <div>
            <Header />
            <main>

                <section className="home">
                    <div className="swiper home-slider">
                        <div className="swiper-wrapper">
                            <div
                                className="swiper-slide"
                                style={{
                                    background: 'url(/home-bg-1.jpg) no-repeat',
                                }}
                            >
                                <div className="content">
                                    <span>explore, discover, travel</span>
                                    <h3>travel around the world</h3>
                                    <Link to="/Package" className="btn">
                                        discover more
                                    </Link>
                                </div>
                            </div>
                            <div
                                className="swiper-slide"
                                style={{
                                    background: 'url(/home-bg-2.jpg) no-repeat',
                                }}
                            >
                                <div className="content">
                                    <span>explore, discover, travel</span>
                                    <h3>discover new places</h3>
                                    <Link to="/Package" className="btn">
                                        discover more
                                    </Link>
                                </div>
                            </div>
                            <div
                                className="swiper-slide"
                                style={{
                                    background: 'url(/img-5.jpg) no-repeat',
                                }}
                            >
                                <div className="content">
                                    <span>explore, discover, travel</span>
                                    <h3>conquer your fears</h3>
                                    <Link to="/Package" className="btn">
                                        discover more
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="services">
                    <h1 className="heading-title"> our services </h1>
                    <div className="box-container">
                        <div className="box">
                            <img src="/serv-1.png" alt="adventure" />
                            <h3>adventure</h3>
                        </div>
                        <div className="box">
                            <img src="/serv-5.png" alt="tour guide" />
                            <h3>tour guide</h3>
                        </div>
                        <div className="box">
                            <img src="/serv-2.png" alt="trekking" />
                            <h3>trekking</h3>
                        </div>
                        <div className="box">
                            <img src="/serv-6.png" alt="rafting" />
                            <h3>rafting</h3>
                        </div>
                        <div className="box">
                            <img src="/serv-3.png" alt="off-roading" />
                            <h3>off-roading</h3>
                        </div>
                        <div className="box">
                            <img src="/serv-4.png" alt="camping" />
                            <h3>camping</h3>
                        </div>
                    </div>
                </section>

                <section className="home-about">
                    <div className="image">
                        <img src="/about-img.jpg" alt="About Us" />
                    </div>
                    <div className="content">
                        <h3>about us</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Cum ipsum ex, sint repellendus tempora consectetur
                            iure vel soluta animi quis placeat consequuntur
                            asperiores iste nam ad? A repellat sequi cupiditate?
                        </p>
                        <Link to="/About" className="btn">
                            read more
                        </Link>
                    </div>
                </section>

                <section className="home-packages">
                    <h1 className="heading-title"> our packages </h1>
                    <div className="box-container">
                        <div className="box">
                            <div className="image">
                                <img src="/category-1.jpg" alt="adventure & tour" />
                            </div>
                            <div className="content">
                                <h3>adventure & tour</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <Link to="/Book" className="btn">book now</Link>
                            </div>
                        </div>

                        <div className="box">
                            <div className="image">
                                <img src="/category-4.jpg" alt="adventure & tour" />
                            </div>
                            <div className="content">
                                <h3>adventure & tour</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <Link to="/Book" className="btn">book now</Link>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src="/category-2.jpg" alt="adventure & tour" />
                            </div>
                            <div className="content">
                                <h3>adventure & tour</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <Link to="/Book" className="btn">book now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="load-more"><Link to="/Package" className="btn">load more</Link></div>
                </section>

                <section className="home-offer">
                    <div className="content">
                        <h3>upto 50% offer</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate pariatur ducimus blanditiis excepturi accusamus ipsa? Tempore reiciendis, deserunt, recusandae odit maiores, animi perferendis dicta hic sequi minus ducimus placeat libero.</p>
                        <Link to="/Book" className="btn">book now</Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;