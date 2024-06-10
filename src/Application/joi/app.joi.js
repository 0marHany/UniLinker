const joi = require("joi");

exports.Schema = {
    body: joi.object().required().keys({
        name:joi.string().required(),
        birthDay:joi.string().required(),
        gender:joi.valid("male","female").required(),
        email:joi.string().email().required(),
        address:joi.string().required(),
        phone: joi.string().pattern(/^[0-9]{11}$/).required().messages({
            'string.pattern.base': 'Phone number must be an 11-digit number starting with 0.',
            'any.required': 'Phone number is required.'
          }),
        ssn: joi.string().pattern(/^[0-9]{15}$/).required().messages({
            'string.pattern.base': 'SSN must be a 15-digit number.',
            'any.required': 'SSN is required.'
          }),
        gpa: joi.number().min(0).max(4).required(),
    })
}