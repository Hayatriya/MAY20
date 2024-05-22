const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS with dynamic origin
app.use(cors({
    origin: (origin, callback) => {
        // Allow all origins for simplicity; you can replace this with your specific origin
        callback(null, true);
    },
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true
}));

// Example data endpoint
app.get('/data', (req, res) => {
    const data = {
        'testuser1': {
            password: 'password1',
            email: 'testuser1@example.com',
            phone: '123-456-7891',
            address: '123 Test St, Test City, Test Country',
            apiKey: 'abc123xyz1'
        },
        'testuser2': {
            password: 'password2',
            email: 'testuser2@example.com',
            phone: '123-456-7892',
            address: '124 Test St, Test City, Test Country',
            apiKey: 'abc123xyz2'
        },
        'testuser3': {
            password: 'password3',
            email: 'testuser3@example.com',
            phone: '123-456-7893',
            address: '125 Test St, Test City, Test Country',
            apiKey: 'abc123xyz3'
        }
    };
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


