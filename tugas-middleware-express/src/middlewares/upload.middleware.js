const multer = require('multer');

// Set up storage to memory (buffer)
const storage = multer.memoryStorage();

// Configure multer with storage and file size limit
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5, // 5MB file size limit
    },
});

// Middleware for handling single file upload
exports.single = upload.single("file");

// Middleware for handling multiple file uploads (up to 10 files)
exports.multiple = upload.array("files", 10);

// Default export (if you want to import the whole module at once)
module.exports = {
    single: exports.single,
    multiple: exports.multiple,
};
