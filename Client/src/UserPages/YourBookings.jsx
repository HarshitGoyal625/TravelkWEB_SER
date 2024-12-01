import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";

const BookingsPage = () => {
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await fetch("/UserBookings");
                if (response.ok) {
                    const data = await response.json();
                    setBookings(data.bookings);
                } else {
                    alert("Failed to fetch bookings.");
                }
            } catch (error) {
                console.error("Error fetching bookings:", error);
                alert("An error occurred. Please try again later.");
            }
        };

        fetchBookings();
    }, []);

    const cancelBooking = async (bookingId) => {
        try {
            const response = await fetch(`/CancelBooking/${bookingId}`, { method: "DELETE" });
            if (response.ok) {
                alert("Booking canceled successfully!");
            } else {
                const data = await response.json();
                alert(data.message || "Failed to cancel booking.");
            }
        } catch (error) {
            console.error("Error canceling booking:", error);
            alert("An error occurred while canceling the booking.");
        }
    };
    return (
        <div>
            < Header/>
        <div className="bookings-container">
            <h1>Your Bookings</h1>
            {bookings.length > 0 ? (
                <table className="bookings-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Location</th>
                            <th>Guests</th>
                            <th>Arrival</th>
                            <th>Leaving</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking, index) => (
                            <tr key={booking.booking_id}>
                                <td>{index + 1}</td>
                                <td>{booking.location}</td>
                                <td>{booking.guests}</td>
                                <td>{booking.arrival}</td>
                                <td>{booking.leaving}</td>
                                <td>
                                    <button
                                        className="btn cancel-booking"
                                        onClick={() => cancelBooking(booking.booking_id)}
                                    >
                                        Cancel Booking
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No bookings found.</p>
            )}
        </div>
        </div>
    );
};

export default BookingsPage;
