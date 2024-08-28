const express = require('express');
const { single, multiple } = require('../middlewares/upload.middleware');
const { handleUpload } = require('../utils/cloudinary');
const router = express.Router();

router.post("/upload/single", single, async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }

    try {
        const result = await handleUpload(req.file.buffer);
        res.status(200).json({ message: "File uploaded successfully", result });
    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({ message: "Upload failed", error: error.message });
    }
});

router.post("/upload/multiple", multiple, async (req, res) => {
    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: "No files uploaded" });
    }

    try {
        const uploadPromises = req.files.map(file => handleUpload(file.buffer));
        const results = await Promise.all(uploadPromises);
        res.status(200).json({ message: "Files uploaded successfully", results });
    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({ message: "Upload failed", error: error.message });
    }
});

module.exports = router;
