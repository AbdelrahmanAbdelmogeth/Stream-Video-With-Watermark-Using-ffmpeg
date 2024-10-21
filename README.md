# Video Streaming with Watermark using FFmpeg and Node.js

This project demonstrates a simple video streaming application using Node.js and FFmpeg, where videos are watermarked on the fly before being streamed to the client.

## Features

- Streams video files with a watermark applied in real-time.
- Supports custom watermark positioning (bottom-right corner by default).
- Responsive video player UI with basic styling.

## Prerequisites

- [Node.js](https://nodejs.org) installed (v14+ recommended)
- [FFmpeg](https://ffmpeg.org/download.html) installed and added to your system's PATH

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/AbdelrahmanAbdelmogeth/Stream-Video-With-Watermark-Using-ffmpeg.git
    cd your-repo-name
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Ensure you have FFmpeg installed and available in your system's PATH. You can check if FFmpeg is installed by running:

    ```bash
    ffmpeg -version
    ```

4. Place your video files and watermark image in the `assets` directory (or adjust paths accordingly in the code).

## Running the Project

1. Start the server:

    ```bash
    npm start
    ```

2. In your browser, navigate to:

    ```
    http://localhost:8080
    ```

3. The video will load with the watermark applied in real-time.

## Project Structure

## Endpoints

### `/videomarked`

Streams the video with a watermark applied using FFmpeg. The watermark image is overlaid in the bottom-right corner, scaled to 150x150 pixels.

## Technologies Used

- **Node.js**: Handles server-side logic.
- **Express.js**: Simplifies request handling.
- **FFmpeg**: Handles video processing and watermark application.
- **HTML/CSS**: Basic frontend for displaying the video.

## Styling the Video Player

You can adjust the look and feel of the video player by modifying the `index.html` file in the `public` directory. Here's an example of the styling applied:

```html
<style>
    body {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f4f4f4;
    }

    header {
        position: absolute;
        top: 0;
        width: 100%;
        background-color: #333;
        color: white;
        text-align: center;
        padding: 20px 0;
        font-size: 24px;
    }

    video {
        width: 640px;
        height: 360px;
        max-width: 80%;
        max-height: 60vh;
        border: 2px solid #333;
        background-color: black;
        display: block;
    }
</style>


