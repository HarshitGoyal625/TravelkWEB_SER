import React, { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
const PackagePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        const loadMoreBtn = document.querySelector('.packages .load-more .btn');
        let currentItem = 3;

        if (loadMoreBtn) {
            loadMoreBtn.onclick = () => {
                const boxes = [
                    ...document.querySelectorAll('.packages .box-container .box'),
                ];
                for (let i = currentItem; i < currentItem + 3; i++) {
                    if (i < boxes.length) {
                        boxes[i].style.display = 'inline-block';
                    }
                }
                currentItem += 3;
                if (currentItem >= boxes.length) {
                    loadMoreBtn.style.display = 'none';
                }
            };
        }
    }, []);

    return (
        <div>
            <Header />
            <main>
                <div
                    className="heading"
                    style={{ background: "url('/img-3.jpg') no-repeat" }}
                >
                    <h1>package</h1>
                </div>
                <section className="packages">
                    <h1 className="heading-title">top destinations</h1>
                    <div className="box-container">
                        <div className="box">
                            <div className="image">
                                <img src="/img-1.jpg" alt="" />
                            </div>
                            <div className="content">
                                <h3>adventure & tour</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                                    vitae quisquam voluptas obcaecati corrupti saepe dolore
                                    beatae excepturi placeat quam.
                                </p>
                                <Link to="/Book" className="btn">
                                    book now
                                </Link>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src="/img-2.jpg" alt="" />
                            </div>
                            <div className="content">
                                <h3>adventure & tour</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                                    vitae quisquam voluptas obcaecati corrupti saepe dolore
                                    beatae excepturi placeat quam.
                                </p>
                                <Link to="/Book" className="btn">
                                    book now
                                </Link>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src="/img-3.jpg" alt="" />
                            </div>
                            <div className="content">
                                <h3>adventure & tour</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                                    vitae quisquam voluptas obcaecati corrupti saepe dolore
                                    beatae excepturi placeat quam.
                                </p>
                                <Link to="/Book" className="btn">
                                    book now
                                </Link>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src="/img-4.jpg" alt="" />
                            </div>
                            <div className="content">
                                <h3>adventure & tour</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                                    vitae quisquam voluptas obcaecati corrupti saepe dolore
                                    beatae excepturi placeat quam.
                                </p>
                                <Link to="/Book" className="btn">
                                    book now
                                </Link>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src="/img-5.jpg" alt="" />
                            </div>
                            <div className="content">
                                <h3>adventure & tour</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                                    vitae quisquam voluptas obcaecati corrupti saepe dolore
                                    beatae excepturi placeat quam.
                                </p>
                                <Link to="/Book" className="btn">
                                    book now
                                </Link>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src="/img-6.jpg" alt="" />
                            </div>
                            <div className="content">
                                <h3>adventure & tour</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                                    vitae quisquam voluptas obcaecati corrupti saepe dolore
                                    beatae excepturi placeat quam.
                                </p>
                                <Link to="/Book" className="btn">
                                    book now
                                </Link>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src="/img-7.avif" alt="" />
                            </div>
                            <div className="content">
                                <h3>adventure & tour</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                                    vitae quisquam voluptas obcaecati corrupti saepe dolore
                                    beatae excepturi placeat quam.
                                </p>
                                <Link to="/Book" className="btn">
                                    book now
                                </Link>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src="/img-8.avif" alt="" />
                            </div>
                            <div className="content">
                                <h3>adventure & tour</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                                    vitae quisquam voluptas obcaecati corrupti saepe dolore
                                    beatae excepturi placeat quam.
                                </p>
                                <Link to="/Book" className="btn">
                                    book now
                                </Link>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src="/img-9.jpg" alt="" />
                            </div>
                            <div className="content">
                                <h3>adventure & tour</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                                    vitae quisquam voluptas obcaecati corrupti saepe dolore
                                    beatae excepturi placeat quam.
                                </p>
                                <Link to="/Book" className="btn">
                                    book now
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="load-more">
                        <span className="btn">load more</span>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default PackagePage;
