const upload = require("../models/upload");
const express = require("express");
const router = express.Router();
const image = require("../models/Image")

router.post("/upload", upload.single("file"), async (req, res) => {
    if (req.file === undefined) return res.send("you must select a file.");
    const imgUrl = `http://localhost:5000/api/img/${req.file.filename}`;
    return res.send(imgUrl);
});


module.exports = router;