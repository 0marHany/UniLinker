const { StatusCodes } = require("http-status-codes");
const { Event } = require("../model/event.model");

const getAllEvent = async (req, res) => {
    try {
        const data = await Event.find({})
        res.status(StatusCodes.ACCEPTED).json({ message: "succeed", data })
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: "failed", error: error.message })
    }
}
const addEvent = async (req, res) => {
    try {
        console.log(req.body);
        const { name, details, date, location } = req.body;
        const event = new Event({
            name, details, date, location
        });
        await event.save();
        res.status(StatusCodes.CREATED).json({ message: "succeed", data: event });
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: "failed", error: error.message });
    }
};


const putEvent = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, details, date, location } = req.body;

        const data = await Event.updateOne({ _id: id }, {
            name, details, date, location
        })
        res.status(StatusCodes.ACCEPTED).json({ message: "succeed", data })
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: "failed", error: error.message })
    }
}
const deleteEvent = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Event.deleteOne({ _id: id })
        res.status(StatusCodes.OK).json({ message: "succeed", data })
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: "failed", error: error.message })
    }
}
module.exports = { getAllEvent, addEvent, putEvent, deleteEvent }