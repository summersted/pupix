const { Router } = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config/default.json');
const { check, validationResult } = require('express-validator');
const router = Router();
// /api/auth/register
router.post('/register',
    [
        check('email', 'Incorrect email.').isEmail(),
        check('password', 'Incorrect password. Must have at least 6 symbols.').isLength({ min: 6 })
    ],
    async (req, res) => {
        try {
            //validate user data
            const validationErrors = validationResult(req);
            console.log(req);
            if (!validationErrors.isEmpty()) {
                return res.status(400).json({
                    errors: validationErrors.array(),
                    massage: 'Incorrect register data.'
                })
            }

            const { email, password } = req.body;
            //search registered users with same email
            const candidate = await User.findOne({ email });
            //return error massege if email isn`t uniq
            if (candidate) {
                return res.status(400).json({ message: 'User with same email exist.' });
            }
            //encypting user password
            const hashedPassword = await bcrypt.hash(password, 12);
            //saving new user to DB
            const user = new User({ email: email, password: hashedPassword });

            await user.save();

            return res.status(200).json({ massage: 'User successfully created.' })
        } catch (error) {
            return res.status(500).json(
                {
                    massage: 'Something went wrong, please try again.'
                });
        }
    });

// /api/auth/login
router.post('/login',
    [
        check('email', 'Enter correct email.').normalizeEmail().isEmail(),
        check('password', 'Enter correct password.').exists()
    ],
    async (req, res) => {
        try {
            //validate user data
            const validationErrors = validationResult(req);
            if (!validationErrors.isEmpty()) {
                return res.status(400).json({
                    errors: validationErrors.array(),
                    massage: 'Incorrect data.'
                })
            }
            const { email, password } = req.body;

            const user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({ massage: 'User with this email doesn`t exist' })
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                const token = jwt.sign(
                    { userId: user.id },
                    config.jwtSecret,
                    { expiresIn: '1h' }
                )
                const expiresDate = new Date().getTime()+config.hoursInMs;
                return res.status(200).json({ token: token, userId: user.id , expiresDate });
            }
            
        } catch (error) {
            return res.status(500).json({ massage: error.message });
        }
    });
    
module.exports = router;