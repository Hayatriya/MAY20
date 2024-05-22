const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Enable CORS with reflecting the Origin header from the request
app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (origin) {
        res.header('Access-Control-Allow-Origin', origin); // Reflecting Origin header
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.header('Access-Control-Allow-Credentials', 'true'); // Allowing credentials (unsafe)
    }
    next();
});

// Handle preflight requests
app.options('*', (req, res) => {
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.status(200).send();
});

// Dummy user data with hardcoded usernames and passwords
const users = {
    'user1': {
        password: 'password1',
        email: 'user1@example.com',
        mobile: '1234567890',
        apiKey: 'abcdef123456',
        address: '123 Main St, Anytown, USA'
    },
    'user2': {
        password: 'password2',
        email: 'user2@example.com',
        mobile: '0987654321',
        apiKey: 'uvwxyz987654',
        address: '456 Elm St, Othertown, USA'
    }
};

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Dummy authentication logic
    if (username && password && users[username] && users[username].password === password) {
        res.json(users[username]);
    } else {
        res.status(401).json({ error: 'Invalid username or password' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

