require("dotenv").config();
const { neon } = require("@neondatabase/serverless");
const path = require('path');
const express = require('express');
const session = require('express-session');
const sql = neon(process.env.DATABASE_URL);
const { createTable, CreateBookTable, WriteDataBook, WriteUserData } = require("./src/connect-db");

const app = express();
app.use(express.json());

const port = 3000;
app.use(
  session({
    secret: process.env.SECRET_KEY, 
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false, 
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, 
    },
  })
);
app.post('/SignUp', async (req, res) => {
  await createTable();
  const data = req.body;
  await WriteUserData(data);
  res.send("Sign Up Successful");
});
app.post('/BookForm', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: 'You must be logged in to book.' });
  }
  const userId = req.session.user.id;
  const data = req.body;
  try {
    await CreateBookTable();
    await WriteDataBook(data, userId);
    res.send('Booking successful');
  } catch (error) {
    console.error('Error during booking:', error);
    res.status(500).json({ message: 'An error occurred while processing your booking.' });
  }
});
app.get('/UserBookings', async (req, res) => {
  if (!req.session.user) {
      return res.status(401).json({ message: 'Unauthorized. Please log in.' });
  }

  const userId = req.session.user.id;

  try {
      const bookings = await sql(`
        SELECT booking_id,location, guests, 
        TO_CHAR(arrival, 'YYYY-MM-DD') as arrival, 
        TO_CHAR(leaving, 'YYYY-MM-DD') as leaving 
        FROM BookForm WHERE user_id = $1`,
        [userId]
      );
      res.status(200).json({ bookings });
  } catch (error) {
      console.error('Error fetching bookings:', error);
      res.status(500).json({ message: 'Failed to fetch bookings.' });
  }
});

app.post('/Login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await sql(
      `SELECT * FROM Users WHERE email ILIKE $1`,
      [email.trim()]
    );

    if (result.length === 0) {
      return res.status(400).json({ message: 'User does not exist.' });
    }

    const user = result[0];  

    if (password !== user.password) {
      return res.status(400).json({ message: 'Invalid password.' });
    }
    req.session.user = { id: user.user_id, name: user.name, email: user.email };
    res.status(200).json({ message: 'Login successful!' });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'An error occurred during login.' });
  }
});
app.delete('/CancelBooking/:id', async (req, res) => {
  const bookingId = req.params.id;
  console.log(bookingId)
  try {
      await sql(`DELETE FROM BookForm WHERE booking_id = $1`, [bookingId]);
      res.status(200).json({ message: "Booking canceled successfully." });
  } catch (error) {
      console.error("Error canceling booking:", error);
      res.status(500).json({ message: "Failed to cancel booking." });
  }
});
app.post('/Logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error logging out:', err);
      return res.status(500).json({ message: 'Error during logout.' });
    }
    res.clearCookie('connect.sid');// Clear the session cookie
    res.status(200).json({ message: 'Logout successful.' });
  });
});
app.get('/Profile', (req, res) => {
  if (!req.session.user) {
      return res.status(401).json({ message: 'Unauthorized. Please log in.' });
  }
  const { id, name, email } = req.session.user;
  res.status(200).json({
      user: { id, name, email }, 
  });
});
app.put('/UpdateProfile', async (req, res) => {
  if (!req.session.user) {
      return res.status(401).json({ message: "Unauthorized. Please log in." });
  }
  const userId = req.session.user.id;
  const { name, email } = req.body;
  try {
      await sql(`
          UPDATE Users 
          SET name = $1, email = $2
          WHERE user_id = $3
      `, [name, email, userId]);
      req.session.user.name = name;
      req.session.user.email = email;
      res.status(200).json({ 
          message: "Profile updated successfully.", 
          user: { id: userId, name, email }
      });
  } catch (error) {
      console.error("Error updating profile:", error);
      res.status(500).json({ message: "Failed to update profile." });
  }
});

app.get('/checkSession', (req, res) => {
  if (req.session.user) {
    res.status(200).json({ name: req.session.user.name });
  } else {
    res.status(401).json({ message: "Not logged in" });
  }
});
app.use(express.static(path.join(__dirname, '../client/dist/')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
