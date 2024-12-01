import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const BookPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        location: "",
        guests: "",
        arrival: "",
        leaving: "",
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log(formData)
            const response = await fetch("/BookForm", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert("Booking submitted successfully!");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    address: "",
                    location: "",
                    guests: "",
                    arrival: "",
                    leaving: "",
                });
            } else {
                alert("Failed to submit booking.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again later.");
        }
    };

    return (
        <div>
            <Header />
            <main>
                <div
                    className="heading"
                    style={{ background: "url('/img-5.jpg') no-repeat" }}
                >
                    <h1>book now</h1>
                </div>

                <section className="booking">
                    <h1 className="heading-title">book your trips!</h1>
                    <form onSubmit={handleSubmit} className="book-form">
                        <div className="flex">
                            <div className="inputBox">
                                <span>name :</span>
                                <input
                                    type="text"
                                    placeholder="enter your name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    autocapitalize="off"
                                />
                            </div>
                            <div className="inputBox">
                                <span>email :</span>
                                <input
                                    type="email"
                                    placeholder="enter your email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    autocapitalize="off"
                                />
                            </div>
                            <div className="inputBox">
                                <span>phone :</span>
                                <input
                                    type="tel"
                                    placeholder="enter your phone number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    autocapitalize="off"
                                />
                            </div>
                            <div className="inputBox">
                                <span>address :</span>
                                <input
                                    type="text"
                                    placeholder="enter your address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    autocapitalize="off"
                                />
                            </div>
                            <div className="inputBox">
                                <span>where to :</span>
                                <input
                                    type="text"
                                    placeholder="place you want to visit"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    autocapitalize="off"
                                />
                            </div>
                            <div className="inputBox">
                                <span>how many :</span>
                                <input
                                    type="number"
                                    placeholder="number of guests"
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    autocapitalize="off"
                                />
                            </div>
                            <div className="inputBox">
                                <span>arrivals :</span>
                                <input
                                    type="date"
                                    name="arrival"
                                    value={formData.arrival}
                                    onChange={handleChange}
                                    autocapitalize="off"
                                />
                            </div>
                            <div className="inputBox">
                                <span>leaving :</span>
                                <input
                                    type="date"
                                    name="leaving"
                                    value={formData.leaving}
                                    onChange={handleChange}
                                    autocapitalize="off"
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn">
                            Submit
                        </button>
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default BookPage;
