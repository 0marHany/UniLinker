
const { Schema } = require("mongoose");

const colSchema = new Schema({
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
    programs: {
        type: [String], 
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    budget: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    track: {
        type: String,
        required: true,
        enum: ["science", "mathematics", "literary"]
    }
},{
    timestamps:true,
})

module.exports = colSchema;