import React, { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        const swiper = new Swiper('.reviews-slider', {
            grabCursor: true,
            loop: true,
            autoHeight: true,
            spaceBetween: 20,
            breakpoints: {
                0: { slidesPerView: 1 },
                700: { slidesPerView: 2 },
                1000: { slidesPerView: 3 },
            },
        });
        return () => {
            if (swiper && swiper.destroy) {
                swiper.destroy(true, true); 
            }
        };
    }, []);
    return (
        <div>
            <Header  />
            <main>
                <div class="H"
                    className="heading"
                    style={{ background: "url('/img-1.jpg') no-repeat" }}
                >
                    <h1>about us</h1>
                </div>
                <section className="about">
                    <div className="image">
                        <img src="/about-img.jpg" alt="About Us" />
                    </div>
                    <div className="content">
                        <h3>why choose us?</h3>
                        <p>
                            lorem20 ipsum dolor sit amet consectetur adipisicing elit. Rem
                            perspiciatis aperiam hic in ut, natus molestiae enim molestias.
                            Totam in dolore repudiandae quaerat, neque nisi aut architecto
                            maiores facere voluptas.
                        </p>
                        <p>
                            lorem20 ipsum dolor, sit amet consectetur adipisicing elit. Repellat
                            numquam molestias aut quae harum dolorem20que, reiciendis iste,
                            architecto, distinctio enim accusamus nesciunt. Excepturi corrupti,
                            laboriosam voluptates aliquam fugit vero dolorem20?
                        </p>
                        <div className="icons-container">
                            <div className="icons">
                                <i className="fas fa-map"></i>
                                <span>top destinations</span>
                            </div>
                            <div className="icons">
                                <i className="fas fa-hand-holding-usd"></i>
                                <span>affordable prices</span>
                            </div>
                            <div className="icons">
                                <i className="fas fa-headset"></i>
                                <span>24/7 guide service</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="reviews">
                    <h1 class="heading-title">Client reviews</h1>
                    <div class="swiper reviews-slider">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit eligendi quasi molestiae dolores minus ad, repudiandae iure deserunt pariatur suscipit., ipsum dolor sit amet consectetur adipisicing elit. Dolore nostrum iusto quia, ab libero exercitationem nam numquam perferendis, quibusdam unde ullam reiciendis, et laborum maiores in quod? Esse, voluptate explicabo.</p>
                                <h3>Jaiveer Singh</h3>
                                <span>Traveller</span>
                                <img src="/pic-5.png" alt="" />
                            </div>
                            <div class="swiper-slide">
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repellendus debitis ipsum quam nulla mollitia molestiae voluptates illo quia commodi. ipsum dolor, sit amet consectetur adipisicing elit. Officiis ea porro fugiat sapiente numquam temporibus, consequuntur, ipsa animi libero nesciunt accusamus itaque inventore dolorum reprehenderit! Molestiae optio iusto voluptatem dicta.</p>
                                <h3>Suchita Tripathi</h3>
                                <span>Traveller</span>
                                <img src="/pic-4.png" alt="" />
                            </div>
                            <div class="swiper-slide">
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam esse dolorem mollitia adipisci facere temporibus enim, ipsa dolores quo sint! ipsum dolor sit amet consectetur adipisicing elit. Impedit dolores a sed vel obcaecati necessitatibus culpa perferendis inventore adipisci ratione! Amet rem iste molestias optio perferendis, ducimus quasi deleniti fugit!</p>
                                <h3>Malenia Rodriguez</h3>
                                <span>Traveller</span>
                                <img src="/pic-2.png" alt="" />
                            </div>
                            <div class="swiper-slide">
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cupiditate laborum quo veniam blanditiis, magnam autem minima odit facilis? Fugit. ipsum dolor sit amet consectetur adipisicing elit. Eum neque perferendis id natus sapiente veniam quod quam ut minus. Aperiam accusamus reprehenderit debitis ipsum libero, aliquam voluptate quae perspiciatis ex!</p>
                                <h3>Beiji Bihan</h3>
                                <span>Traveller</span>
                                <img src="/pic-6.png" alt="" />
                            </div>
                            <div class="swiper-slide">
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui explicabo praesentium ut excepturi ratione voluptate quaerat modi dolorum vel. ipsum dolor sit amet consectetur adipisicing elit. Neque reprehenderit cum quae accusantium necessitatibus explicabo, nisi obcaecati provident deleniti velit quaerat id quod repellat adipisci dolores sed nemo ex sunt!</p>
                                <h3>John Stewart</h3>
                                <span>Traveller</span>
                                <img src="/pic-1.png" alt="" />
                            </div>
                            <div class="swiper-slide">
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <p>Our so-called journey to Tahiti started with grand promises. Dutch had us convinced that a sugar plantation life awaited us—a peaceful retreat from Pinkertons, rival gangs, and the mistakes we'd made. But as is often the case with Dutch's plans, things took a turn for the worse long before we ever saw a sailboat.
                                  After robbing a boat loaded with high society folk, we got tangled up with Cornwall's private army and ended up fleeing on a cargo ship. Instead of Tahiti, we found ourselves shipwrecked on Guarma, a tropical island that was anything but paradise.</p>
                                <h3>Arthur Morgan</h3>
                                <span>Traveller</span>
                                <img src="/3a1706903cc7ae48fb72b11857813523.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <details>fdsjkafdsjk</details>
        </div >
    );
};

export default AboutPage;
