const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;