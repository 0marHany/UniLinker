const { StatusCodes } = require("http-status-codes")
const { Students } = require("../model/student.model")
const bcrypt = require("bcrypt")
const getAllStudents = async (req, res) => {
    try {
        const data = await Students.find({}).select('-password').select('-rePassword');
        res.status(StatusCodes.ACCEPTED).json({ message: "succeed", data })
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: "failed", error: error.message })
    }
}

const addStudent = async (req, res) => {
    try {
        const { firstName, lastName, email, track, password, rePassword } = req.body;
        const user = await Students.findOne({ email });
        if (user) {
            res.status(StatusCodes.BAD_REQUEST).json({ message: "this email already exist" })
        }
        else {
            const student = new Students({ firstName, lastName, email, track, password, rePassword, role:"user" });
            await student.save();
            res.status(StatusCodes.ACCEPTED).json({ message: "succeed", data: { firstName, lastName, email, track } })
        }
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: "failed", error: error.message })
    }
}

const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const student = await Students.findOne({ email });
        if (student) {
            const match = await bcrypt.compare(password, student.password);
            if (match) {
                const { firstName, lastName, email, track } = student
                res.status(StatusCodes.ACCEPTED).json({ message: "succeed", data: { firstName, lastName, email, track } })
            }
            else
                res.status(StatusCodes.FORBIDDEN).json({ message: "password is not correct" })
        }
        else
            res.status(StatusCodes.NOT_FOUND).json({ message: "email is not correct" })
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: "failed", error: error.message })
    }
}
const removeall = async (req, res) => {
    const data = await Students.deleteMany({})
    res.json(data)
}
module.exports = { getAllStudents, addStudent, signIn, removeall }
