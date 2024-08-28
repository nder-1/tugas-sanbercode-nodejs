const express = require('express');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = 3000;

app.use('/', apiRoutes);

app.get("/", function (req, res) {
    res.status(200).json({
        message: "OK",
        data: null,
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
