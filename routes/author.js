const express = require("express");

const router = express.Router();

let AuthorModel = require('../models/author');

router.get('/author', async (req, res) => {
    try {
        const authorModel = AuthorModel.find({});
        res.send(authorModel).status(200);
    }
    catch (err) {
        res.send(err).status(500);
    }
});

module.exports = router;