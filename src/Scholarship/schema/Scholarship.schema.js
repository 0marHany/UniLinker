
const { Schema } = require("mongoose");

const scolarSchema = new Schema({
    university: {
        type: Schema.Types.ObjectId,
        ref: "University",
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    criteria: {
        type: String, 
        required: true,
    },
    deadline: {
        type: String,
        required: true,
    },
},{
    timestamps:true,
})

module.exports = scolarSchema;