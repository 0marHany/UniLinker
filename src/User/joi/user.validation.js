const joi = require("joi");

module.exports = {
    addUserSchema: {
        body: joi.object().required().keys({
            firstName: joi.string().required(),
            lastName: joi.string().required(),
            email: joi.string().email().required(),
            track: joi.valid("science", "mathematics", "literary").required(),
            password: joi.string().required(),
            rePassword: joi.ref("password"),
        })
    },
    signInSchema: {
        body: joi.object().required().keys({
            email: joi.string().email().required(),
            password: joi.string().required(),
        })
    }
}