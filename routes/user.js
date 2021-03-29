const express = require("express");

const router = express.Router();

const UserModel = require('../models/user');

router.get('/user', async (req, res) => {
    let u_data = await UserModel.find({});
    res.send(u_data);
});

router.post('/user', async (req, res) => {
    try {
        const { name, role } = req.body;
        let model = new UserModel({
            name: name,
            role: role
        });
        await model.save();
        res.send({ 'message': 'Users has been Enrolling successfully!' });
    } catch (err) {
        res.status(500).send({ 'message': 'Something Went Wrong!' });
    }
});

module.exports = router;