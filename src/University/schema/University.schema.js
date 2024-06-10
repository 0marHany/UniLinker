const { Schema } = require("mongoose");

const uniSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    website: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum:["government","private"]
    }
},{
    timestamps:true,
}) 

module.exports=uniSchema;