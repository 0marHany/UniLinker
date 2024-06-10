const { Schema } = require("mongoose");

exports.appShema = new Schema({
    name: { type: String, required: true },
    birthDay: { type: String, required: true },
    gender: { type: String, required: true, enum: ["male", "female"] },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    ssn: { type: String, required: true },
    gpa: { type: Number, required: true },
}, { timestamps: true })