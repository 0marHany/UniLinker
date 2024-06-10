const { StatusCodes } = require('http-status-codes');

module.exports = (Schema) => {
    return (req, res, next) => {
        const { error } = Schema.body.validate(req.body, { abortEarly: false });
        if (error)
            res.status(StatusCodes.BAD_REQUEST).json({ error: error.details });
        else
            next();
    };
};
