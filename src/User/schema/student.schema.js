const { Schema } = require('mongoose');
const bcrypt = require("bcrypt")
const studentSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
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
    track: { type: String, required: true, enum: ["science", "mathematics", "literary"] },
    password: { type: String, required: true },
    rePassword: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return value === this.password;
            },
            message: 'Passwords do not match'
        }
    },
});

studentSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, 8);
    this.rePassword = this.password; // Ensure repassword is also hashed
    next();
});

module.exports = studentSchema;