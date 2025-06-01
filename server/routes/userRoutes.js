const express = require('express');
const User = require('../models/userModel');
// bcrypt library — used to safely handle passwords
const bcrypt = require('bcrypt');

const userRouter = express.Router();

// ------------------- LOGIN -------------------
userRouter.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Basic input validation
        if (!email || !password) {
            return res.status(400).send({
                success: false,
                message: 'Email and password are required',
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User doesn't exist, please register"
            });
        }

        // 2. Compare password
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).send({
                success: false,
                message: "Incorrect password"
            });
        }

        res.status(200).send({
            success: true,
            message: "User logged in successfully",
            user: {
                name: user.name,
                email: user.email
            }
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ------------------- REGISTER -------------------
userRouter.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // 1. Basic input validation
        if (!name || !email || !password) {
            return res.status(400).send({
                success: false,
                message: 'All fields are required',
            });
        }

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).send({
                success: false,
                message: 'User already exists'
            });
        }

        // 2. Hash password and save
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).send({
            success: true,
            message: 'User registered successfully',
            user: {
                name: newUser.name,
                email: newUser.email
            }
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = userRouter;
