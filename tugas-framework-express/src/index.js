var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

// Middleware express.static untuk menyajikan file statis dari direktori 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Route untuk hello
app.get("/hello", function (req, res) {
    res.status(200).json({
        message: "Success fetch message",
        data: "Hello World!",
    });
});

// Route untuk user
app.get("/user", function (req, res) {
    res.status(200).json({
        message: "Success fetch user",
        data: {
            id: 1,
            name: "Budi",
            username: "budidu",
            email: "budidu@mail.com",
        },
    });
});

app.listen(PORT, function () {
    console.log(`Server is running on http://localhost:${PORT}`);
});
