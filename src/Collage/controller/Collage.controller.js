const { StatusCodes } = require("http-status-codes");
const { Collage } = require("../model/Collage.model");
const { Uni } = require("../../University/model/University.model");
const getAllCollage = async (req, res) => {
    try {
        const { uni_id } = req.params
        const find = await Uni.findOne({ _id: uni_id })
        if (find) {
            const data = await Collage.find({university:uni_id}).populate("university","name");
            res.status(StatusCodes.ACCEPTED).json({ message: "succeed", data })
        } else {
            res.status(StatusCodes.NOT_FOUND).json({ message: "Univresity Not Found" })
        }
       
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: "failed", error: error.message })
    }
}
const addCollage = async (req, res) => {
    try {
        console.log(req.body);
        const { university, name, description, programs, duration, budget, track } = req.body;
        const collage = new Collage({
            university, // Assuming 'university' is the correct field name
            name,
            description,
            programs,
            duration,
            budget,
            track,
            imageUrl: `http://localhost:5000/${req.file.path}`,
        });
        await collage.save();
        res.status(StatusCodes.CREATED).json({ message: "succeed", data: collage });
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: "failed", error: error.message });
    }
};


const putCollage = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, description, programs, duration, budget, track } = req.body;

        const data = await Collage.updateOne({ _id: id }, {
            name, description, programs, duration, budget, track,imageUrl:`http://localhost:5000/${req.file.path}`})
        res.status(StatusCodes.ACCEPTED).json({ message: "succeed", data })
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: "failed", error: error.message })
    }
}
const deleteCollage = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Collage.deleteOne({ _id: id })
        res.status(StatusCodes.OK).json({ message: "succeed", data })
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: "failed", error: error.message })
    }
}
module.exports = { getAllCollage, addCollage, putCollage, deleteCollage }