const express = require('express');
const fs = require('fs');
const cors = require('cors')
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');

const app = express();

app.use(cors({
  origin: '*'
}));

app.get('/videomarked', (req, res) => {
    const videoPath = path.join(__dirname, 'assets', '191159-889246512_tiny.mp4'); // Path to your original video
    const watermarkPath = path.join(__dirname, 'assets', 'watermark.png'); // Path to your watermark image
  
    console.log(videoPath, watermarkPath); // Log paths for debugging
  
    res.setHeader('Content-Type', 'video/mp4');
  
    ffmpeg(videoPath)
      .input(watermarkPath)
      .complexFilter([
        '[1:v] scale=150:150 [wm]', // Scale the watermark to 150*150 pixels
        '[0:v][wm] overlay=W-w-10:H-h-10' // Place the scaled watermark at the bottom-right corner
      ])
      .outputFormat('mp4') // Specify the output format
      .addOutputOption('-movflags', '+empty_moov') // Add this option to support non-seekable output
      .on('start', () => {
        console.log('FFmpeg process started');
      })
      .on('error', (err, stdout, stderr) => {
        console.error('An error occurred: ' + err.message);
        console.error('FFmpeg stderr: ' + stderr);
        if (!res.headersSent) {
          res.status(500).send('An error occurred while processing the video');
        }
      })
      .on('end', () => {
        console.log('FFmpeg process finished');
      })
      .pipe(res, { end: true });
  });


app.use(express.static('public'));

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});