import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const htmlElement = document.documentElement;
        const previousFontSize = htmlElement.style.fontSize;
        htmlElement.style.fontSize = "100%"; 
        return () => {
            htmlElement.style.fontSize = previousFontSize;
        };
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
            const response = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Login successful!");
                navigate("/"); 
            } else {
                const result = await response.json();
                setErrorMessage(result.message || "Failed to login. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting login form:", error);
            setErrorMessage("An error occurred while logging in.");
        }
    };
    return (
        <section className="login" style={{ fontSize: "100%", background: 'url(/login-bgg.avif) no-repeat' }}>
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
                                    <h2>Welcome Back!</h2>
                                    <h6>Enter to get unlimited enjoyment with Travel.</h6>
                                </div>

                                <div className="actual-form">
                                    {errorMessage && <p className="error">{errorMessage}</p>}
                                    
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
                                    <input type="submit" value="Sign In" className="sign-btn" />
                                    <p className="text">
                                        Don't have an account? <Link to="/SignUp">Register Here</Link>
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

export default SignForm;
