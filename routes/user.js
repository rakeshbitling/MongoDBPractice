const express = require("express");

const router = express.Router();

const UserModel = require('../models/user');

//GET SINGLE USER
router.get("/user/:id", async (req, res) => {
    try {
        const user = await UserModel.findOne({ _id: req.params.id })
        res.send(user);
    } catch (err) {
        res.status(500).send({ 'message': 'Something Went Wrong!' })
    }
});

//GET LIST OF USERS
router.get('/user', async (req, res) => {
    try {
        let u_data = await UserModel.find({});
        res.send(u_data);
    } catch (error) {
        res.status(500).send({ 'message': 'something went wrong' });
    }
});

//ADD SINGLE USER INTO THE DATABASE
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

//UPDATE A SINGLE USER and display same
router.patch('/user/:id', (req, res) => {
    UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true }).then((user) => {
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    }).catch((error) => {
        res.status(500).send(error);
    })
});

router.put("/user/:id", async (req, res) => {
    try {
        let user = await UserModel.findById(req.params.id).exec();
        console.log('Before Save',user);
        user.set(req.body);
        let result = await user.save();
        console.log('After Save',result);
        res.send(result);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
});

module.exports = router;