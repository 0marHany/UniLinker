const { Schema } = require("mongoose");

const eventSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    
},{
    timestamps:true,
}) 

module.exports=eventSchema;