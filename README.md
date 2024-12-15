# Real-Time Chat Application using Node.js, Express, and Socket.io

This is a real-time chat application built using **Node.js**, **Express**, and **Socket.io**. It allows users to join the chat, send messages, see when other users are typing, and view a list of connected users. The application supports real-time communication with live updates.

## Features

- **Real-time Messaging**: Users can send messages to the chat room, and other users will see them in real-time.
- **User Join/Leave Notifications**: Notifications when users join or leave the chat.
- **Typing Indicator**: Shows when a user is typing a message.
- **User List**: Displays a list of all connected users.
- **Responsive Interface**: The application is designed to be responsive, making it accessible on both desktop and mobile devices.

## Installation

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Steps

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/RealTime-Chat_Application-using-Nodejs-express-and-socket-io.git
Navigate to the project directory:

bash
Copy code
cd RealTime-Chat_Application-using-Nodejs-express-and-socket-io
Install the required dependencies:

bash
Copy code
npm install
Start the application:

bash
Copy code
node index.js
Open your browser and navigate to:

arduino
Copy code
http://localhost:8000
File Structure
php
Copy code
├── public/
│   ├── index.html           # Main HTML file for the chat interface
│   ├── style.css            # Styling for the chat application
│   └── client.js            # JavaScript file to handle client-side logic
├── nodeserver/
│   ├── index.js             # Server-side logic to handle connections and messages
│   └── node_modules/        # Node.js modules (automatically created after npm install)
├── package.json             # Contains project dependencies and scripts
└── README.md                # This file


Technologies Used
Node.js: JavaScript runtime for building the server.
Express: Web framework for Node.js to handle HTTP requests.
Socket.io: Library for real-time, bidirectional communication between clients and servers.
HTML/CSS: For structuring and styling the user interface.

Usage
User Join: When a user joins the chat, they will be prompted to enter their name. Their name will be displayed in the user list and a notification will be shown to all connected users.
Sending Messages: Users can send messages by typing into the input field and pressing Enter. Messages are broadcasted to all connected users.
Typing Indicator: When a user starts typing a message, a typing indicator will show up for other users.
User Disconnect: When a user disconnects, a notification is sent to all other users that the user has left.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Socket.io - For enabling real-time web socket communication.
Express - For building the server-side API.
Feel free to contribute or make improvements. Enjoy chatting in real time! 😊

vbnet
Copy code
