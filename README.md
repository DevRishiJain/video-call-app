# Real-time Video Call Application

A modern, room-based video calling application built with Node.js, Socket.IO, and WebRTC. This application allows users to create private rooms and conduct video calls with other users in real-time.

## Features

- 🎥 Real-time video and audio streaming
- 🔒 Room-based private conversations
- 🎯 Unique room IDs for secure connections
- 📱 Responsive and modern UI
- 🎛️ Camera and microphone device selection
- 🔄 Automatic call start when users join the same room
- 📊 Connection status indicators
- 🚀 Easy deployment on Render.com

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- A modern web browser with WebRTC support
- Camera and microphone access

## Installation

1. Clone the repository:
```bash
git clone https://github.com/DevRishiJain/video-call-app.git
cd video-call-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
node server.js
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Usage

### Creating a Room

1. Open the application in your browser
2. Click "Create New Room" to generate a random room ID
3. Share the room ID with the person you want to call
4. Wait for the other person to join

### Joining a Room

1. Open the application in your browser
2. Enter the room ID received from the host
3. Click "Join Room"
4. The video call will start automatically when both users are in the same room

### During the Call

- Use the camera and microphone dropdowns to switch between available devices
- The status indicator shows the current connection state
- Click "Hang Up" to end the call
- The room remains active until all users leave

## Technical Stack

- **Backend:**
  - Node.js
  - Express.js
  - Socket.IO for real-time communication
  - WebRTC for peer-to-peer video streaming

- **Frontend:**
  - HTML5
  - CSS3 (with modern styling)
  - JavaScript (ES6+)
  - WebRTC API

## Deployment

The application is configured for easy deployment on Render.com:

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure the following settings:
   - Build Command: `npm install`
   - Start Command: `node server.js`
   - Environment Variables: None required

## Security Considerations

- Room IDs are randomly generated and case-sensitive
- Each room is isolated from other rooms
- WebRTC connections are encrypted
- No data is stored on the server

## Browser Support

The application works best on modern browsers that support WebRTC:
- Google Chrome (recommended)
- Mozilla Firefox
- Microsoft Edge
- Safari (with WebRTC enabled)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- WebRTC for enabling peer-to-peer video communication
- Socket.IO for real-time bidirectional communication
- Render.com for hosting infrastructure

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.

---

Made with ❤️ by DevRishiJain 