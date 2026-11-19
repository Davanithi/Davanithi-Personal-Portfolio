const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

db.connect((err) => {
    if (err) {
        console.error('MySQL Connection Failed:', err.message);
        return;
    }

    console.log('MySQL Connected Successfully!');
});

// Test Route
app.get('/', (req, res) => {
    res.send('Portfolio Backend is Running!');
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// Contact Form API
app.post('/contact', (req, res) => {

    const { name, email, subject, message } = req.body;

    const sql = `
        INSERT INTO contacts (name, email, subject, message)
        VALUES (?, ?, ?, ?)
    `;

    db.query(sql, [name, email, subject, message], (err, result) => {

        if (err) {
            console.error(err);
            return res.status(500).json({
                message: 'Failed to save contact'
            });
        }

        res.status(201).json({
            message: 'Contact saved successfully!'
        });

    });

});