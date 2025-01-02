const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// Middleware to serve static files (CSS, JS, etc.)
app.use(express.static('public'));

// Define the root route to serve your HTML file
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`); // Adjust the path as necessary
});

// Handle socket.io connections
io.on('connection', socket => {
    console.log('A user connected');
    
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});
// Start the server with error handling
const PORT = process.env.PORT || 8000;
http.listen(PORT, err => {
    if (err) {
        console.error(`Error starting server: ${err}`);
    } else {
        console.log(`Server is running on http://localhost:${PORT}`);
    }
});
