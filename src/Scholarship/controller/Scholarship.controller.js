const { StatusCodes } = require("http-status-codes");
const { Scolar } = require("../model/Scholarship.model");

const getAllScholar = async (req, res) => {
    try {
        const data = await Scolar.find({}).populate("university", "name website");
        res.status(StatusCodes.ACCEPTED).json({ message: "succeed", data })

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: "failed", error: error.message });
    }
}
const addScholar = async (req, res) => {
    try {
        const { university, name, description, criteria, deadline } = req.body;
        const scolar = new Scolar({
            university, name, description, criteria, deadline
        })
        await scolar.save();
        res.status(StatusCodes.CREATED).json({ message: "succeed", data: scolar })
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: "failed", error: error.message });
    }
}

const putScholar = async (req, res) => {
    try {
        const { id } = req.params
        const { university, name, description, criteria, deadline } = req.body;
        const data = await Scolar.updateOne({ _id: id }, { university, name, description, criteria, deadline })
        res.status(StatusCodes.OK).json({ message: "succeed", data })
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: "failed", error: error.message });
    }
}

const deleteScholar = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Scolar.deleteOne({ _id: id })
        res.status(StatusCodes.OK).json({ message: "succeed", data })
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: "failed", error: error.message });
    }
}

module.exports = { getAllScholar, addScholar, putScholar, deleteScholar }