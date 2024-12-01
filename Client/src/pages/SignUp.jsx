import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUpForm = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const htmlElement = document.documentElement;
        const previousFontSize = htmlElement.style.fontSize;
        htmlElement.style.fontSize = "100%"; 
        return () => {
          htmlElement.style.fontSize = previousFontSize;
        };
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

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
            console.log(formData);
            const response = await fetch("/SignUp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Sign-up successful!");
                setFormData({
                    name: "",
                    email: "",
                    password: "",
                });
                navigate("/login");  
            } else {
                alert("Failed to sign you up.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again later.");
        }
    };

    return (
        <section className="login" style={{
            background: 'url(/login-bgg.avif) no-repeat',
        }}>
            <div className="lbox">
                <div className="inner-box">
                    <div className="cont">
                        <div className="forms-wrap">
                            <form onSubmit={handleSubmit} autoComplete="off" className="sign-in-form">
                                <div className="logo">
                                    <img src="/logo.jpg" alt="Travel" />
                                    <h4>Travel.</h4>
                                </div>
                                <div className="head">
                                    <h2>Welcome!</h2>
                                    <h6>Sign up to get started with Travel.</h6>
                                </div>

                                <div className="actual-form">
                                    <div className="input-wrap">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="input-field"
                                            autoComplete="off"
                                            minLength={4}
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            style={{ textTransform: 'none' }}
                                            autocapitalize="off"
                                        />
                                    </div>

                                    <div className="input-wrap">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="input-field"
                                            autoComplete="off"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            style={{ textTransform: 'none' }}
                                            autocapitalize="off"
                                        />
                                    </div>
                                    <div className="input-wrap">
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="input-field"
                                            autoComplete="off"
                                            minLength="4"
                                            required
                                            value={formData.password}
                                            onChange={handleChange}
                                            style={{ textTransform: 'none' }}
                                            autocapitalize="off"
                                        />
                                    </div>
                                    <input type="submit" value="Sign Up" className="sign-btn" />
                                    <p className="text">
                                        Already have an account?
                                        <Link to="/Login"> Sign In</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="inner-box-2">
                    <div className="image">
                        <img src="/carasoul.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUpForm;
