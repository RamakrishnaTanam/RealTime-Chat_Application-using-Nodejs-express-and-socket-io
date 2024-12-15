const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// Serve static files (CSS, JS, etc.)
app.use(express.static('public'));

// Define the root route to serve your HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Adjust the path as necessary
});

// Handle socket.io connection
io.on('connection', socket => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

// Start the server
const PORT = 8000;
http.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
