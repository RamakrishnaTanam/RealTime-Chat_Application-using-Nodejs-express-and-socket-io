const socket = io('http://localhost:8000');

// DOM Elements
const form = document.getElementById('send-container');
const messageInp = document.getElementById('messageInp');
const messagesContainer = document.getElementById('messages-container');
const userList = document.getElementById('user-list');
const typingIndicator = document.getElementById('typing-indicator');

// Append messages
const appendMessage = (message, position, timestamp = '') => {
    const messageElement = document.createElement('div');
    messageElement.innerText = timestamp ? `[${timestamp}] ${message}` : message;
    messageElement.classList.add('message', position);
    messagesContainer.append(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
};

// Append users
const updateUserList = (users) => {
    userList.innerHTML = '';
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user;
        userList.appendChild(li);
    });
};

// Prompt user for name
const name = prompt('Enter your name:') || 'Anonymous';
socket.emit('new-user-joined', name);

// Receive new user joined
socket.on('user-joined', (data) => {
    appendMessage(`${data.name} joined the chat`, 'left');
});

// Receive user list
socket.on('user-list', (users) => {
    updateUserList(users);
});

// Receive messages
socket.on('receive', (data) => {
    appendMessage(`${data.name}: ${data.message}`, 'left', data.timestamp);
});

// Typing indicator
messageInp.addEventListener('input', () => {
    socket.emit('typing', name);
});

socket.on('user-typing', (typingName) => {
    typingIndicator.innerText = `${typingName} is typing...`;
    setTimeout(() => {
        typingIndicator.innerText = '';
    }, 1000);
});

// User left
socket.on('user-left', (name) => {
    appendMessage(`${name} left the chat`, 'left');
});

// Send messages
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInp.value;
    appendMessage(`You: ${message}`, 'right', new Date().toLocaleTimeString());
    socket.emit('send', message);
    messageInp.value = '';
});
