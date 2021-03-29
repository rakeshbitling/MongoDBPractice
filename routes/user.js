const express = require("express");

const router = express.Router();

const UserModel = require('../models/user');

router.get('/user', async (req, res) => {
    try {
        let u_data = await UserModel.find({});
        res.send(u_data);
    } catch (error) {
        res.status(500).send({ 'message': 'something went wrong' });
    }
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

router.put('/user', function (req, res) {
    UserModel.updateOne({ name: "Rakesh" }, { role: "Senior Technical Leader" },
        function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        });
});

module.exports = router;