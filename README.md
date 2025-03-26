# WebRTC Video Call Application

A simple WebRTC-based video call application that allows users to make video calls through their web browser.

## Features

- Real-time video and audio communication
- Multiple camera support
- Multiple microphone support
- Device switching during calls
- Simple and intuitive interface

## Deployment Instructions

### Deploy on Render.com (Recommended)

1. Create a Render.com account if you don't have one
2. Click "New +" and select "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - Name: video-call-app (or your preferred name)
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Plan: Free

### Deploy on Heroku

1. Create a Heroku account if you don't have one
2. Install Heroku CLI
3. Run the following commands:
   ```bash
   heroku create your-app-name
   git push heroku main
   ```

### Deploy on DigitalOcean App Platform

1. Create a DigitalOcean account if you don't have one
2. Go to App Platform
3. Click "Create App"
4. Connect your GitHub repository
5. Select the branch to deploy
6. Configure the service:
   - Environment: Node.js
   - Build Command: `npm install`
   - Run Command: `npm start`

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:3000 in your browser

## Requirements

- Node.js >= 14.0.0
- Modern web browser with WebRTC support
- Camera and microphone access 