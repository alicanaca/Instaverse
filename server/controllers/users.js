import User from '../models/userContent.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const login = async (req, res) => {
    const { email, password } = req.body

    try {
        const isUser = await User.findOne({email})
        if(!isUser){
            return res.status(404).json({message: "User not found"})
        }
        const isPasswordValid = await bcrypt.compare(password, isUser.password)
        if(!isPasswordValid){
            return res.status(404).json({message: "Password is incorrect"})
        }
        const token = jwt.sign({email: isUser.email, id: isUser._id }, "1234", { expiresIn: "10m" })
        res.status(200).json({ result: isUser, token });
    } catch (error) {
        res.status(500).json({message: "Something went wrong"})
    }
}

const signup = async (req, res) => {
    const { username, email, password, confirmPassword } = req.body
    try {
        const isUser = await User.findOne({email})
        if(isUser){
            return res.status(400).json({message: "Email has been taken"})
        }
        if(password !== confirmPassword) {
            return res.status(400).json({message: "Passwords did not match"})
        }
        const encryptedPass = await bcrypt.hash(password, 10)
        const result = await User.create({ username, email, password: encryptedPass })
        const token = jwt.sign({email: result.email, id: result._id }, "1234", { expiresIn: "1h" })
        res.status(201).json({ result, token });
    } catch (error) {
        res.status(500).json({message: "Something went wrong"})
    }
}

const getuser = async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export { login, signup, getuser }