const express = require("express");

const router = express.Router();

const Users = require('../models/user');

router.get('/user',async (req, res) => {
    let u_data = await Users.find({});
    res.send(u_data);
});

module.exports = router;