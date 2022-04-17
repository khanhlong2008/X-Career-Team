const User = require('../models/user')
const bcrypt = require('bcrypt')

const userController = {
    newUser: async (req, res, next) => {
        try {
            const { username, phone, password, isAdmin } = req.value.body
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(password, salt)
            const beforeInfo = await User.find()
            let Phone = [];
            let UserName = [];
            beforeInfo.map((item) => {
                Phone.push(item.phone)
                UserName.push(item.username)
            })
            for (var i = 0; i < UserName.length; i++) {
                for (var j = 0; j < Phone.length; j++) {
                    if (UserName[i] == username) {
                        return res.status(404).json({ msg: 'This UserName is already registered' })
                    }
                    else if (Phone[j] == phone) {
                        return res.status(404).json({ msg: 'This PhoneNumber is already registered' })
                    }
                }
            }
            const newUser = await new User({
                phone: phone,
                username: username,
                password: hashed,
                isAdmin: isAdmin,
            });
            await newUser.save();
            return res.status(201).json({ user: newUser });
        } catch (err) {
            res.status(500).json({});
        }
    },
    getAllUser: async (req, res) => {
        try {
            const user = await User.find();
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    getUserbyID: async (req, res) => {
        try {
            const { id } = req.value.params
            const user = await User.findById(id);
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    updateUser: async (req, res) => {
        try {
            const { id } = req.value.params;
            const { username, phone, avatar, address, isAdmin } = req.value.body
            const beforeInfo = await User.findById(id)
            if (username !== beforeInfo.username) {
                const userName = await User.findOne({ username })
                if (userName) {
                    return res
                        .status(404)
                        .json({ msg: 'This username is already registered' })
                }
            }
            const newUser = {
                username,
                phone,
                avatar,
                address,
                isAdmin
            };
            const foundUser = await User.findByIdAndUpdate(id, newUser);
            return res.status(200).json({ success: true });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ error: err });
        }
    },
    deleteUser: async (req, res) => {
        try {
            const { id } = req.value.params
            await User.findByIdAndDelete(id);
            res.status(200).json("User deleted");
        } catch (err) {
            res.status(500).json(err);
        }
    },
}
module.exports = userController;
