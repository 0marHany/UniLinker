const { StatusCodes } = require("http-status-codes")
const { App } = require("../model/app.model")

exports.getAllApp = async (req, res) => {
    try {
        const data = await App.find({})
        res.status(StatusCodes.ACCEPTED).json({ message: "succeed", data })
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: "failed", error: error.message })
    }
}

exports.addApp = async (req, res) => {
    try {
        const { name, birthDay, gender, email, address, phone, ssn, gpa } = req.body;
        const app = new App({
            name, birthDay, gender, email, address, phone, ssn, gpa
        })
        await app.save();
        res.status(StatusCodes.CREATED).json({ message: "succeed", data: app })
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: "failed", error: error.message })
    }
}

exports.putApp = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, birthDay, gender, email, address, phone, ssn, gpa } = req.body;
        const data = await App.updateOne({ _id: id },
            { name, birthDay, gender, email, address, phone, ssn, gpa })
        
        res.status(StatusCodes.OK).json({ message: "succeed", data })

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: "failed", error: error.message })
    }
}

exports.deleteApp = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await App.deleteOne({ _id: id })
        res.status(StatusCodes.OK).json({ message: "succeed", data })
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: "failed", error: error.message })
    }
}