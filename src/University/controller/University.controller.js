const { StatusCodes } = require("http-status-codes");
const { Uni } = require("../model/University.model");
const getAllUni = async (req, res) => {
    try {
        const data = await Uni.find({});
        res.status(StatusCodes.ACCEPTED).json({ message: "succeed", data })
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: "failed", error: error.message })
    }
}
const addUni = async (req, res) => {
    try {
        const { name, description, location, website, type } = req.body;
        const uni = new Uni({
            name,
            description,
            imageUrl: `http://localhost:5000/${req.file.path}`,
            location,
            website,
            type
        })
        await uni.save();
        res.status(StatusCodes.CREATED).json({ message: "succeed", data: uni })
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: "failed", error: error.message })
    }
}

const putUni = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, description, location, website, type } = req.body;

        const data = await Uni.updateOne({ _id: id }, {
            name,
            description,
            location,
            website,
            imageUrl: `http://localhost:5000/${req.file.path}`,
            type
        })
        res.status(StatusCodes.ACCEPTED).json({ message: "succeed", data })
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: "failed", error: error.message })
    }
}
const deleteUni = async (req, res) => {
    try {
        const id = req.params.id;
        const data =await Uni.deleteOne({ _id: id })
        res.status(StatusCodes.OK).json({ message: "succeed", data })
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: "failed", error: error.message })
    }
}
module.exports = { getAllUni, addUni, putUni, deleteUni }