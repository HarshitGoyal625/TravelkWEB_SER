import React, { useEffect, useState } from "react";
import Header from "../components/header";

const ProfilePage = () => {
    const [userData, setUserData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await fetch("/Profile");
                if (response.ok) {
                    const data = await response.json();
                    setUserData(data.user);
                    setFormData({
                        name: data.user.name,
                        email: data.user.email,
                    });
                } else {
                    alert("Failed to fetch user profile.");
                }
            } catch (error) {
                console.error("Error fetching profile:", error);
                alert("An error occurred. Please try again later.");
            }
        };

        fetchProfileData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/UpdateProfile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Profile updated successfully!");
                const updatedData = await response.json();
                setUserData(updatedData.user);
                setIsEditing(false);
            } else {
                alert("Failed to update profile.");
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            alert("An error occurred. Please try again later.");
        }
    };

    return (
        <div>
            < Header/>
            <div className="profile-container">
                <h1>Your Profile</h1>
                {userData ? (
                    <div className="profile-details">
                        {!isEditing ? (
                            <>
                                <p><strong>Name:</strong> {userData.name}</p>
                                <p><strong>Email:</strong> {userData.email}</p>
                                <button onClick={handleEditToggle}>Edit Profile</button>
                            </>
                        ) : (
                            <form onSubmit={handleUpdateProfile}>
                                <div>
                                    <label>
                                        Name:
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        Email:
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                                <button type="submit">Save Changes</button>
                                <button type="button" onClick={handleEditToggle}>
                                    Cancel
                                </button>
                            </form>
                        )}
                    </div>
                ) : (
                    <p>Loading profile...</p>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;
