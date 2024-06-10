const mongoose = require("mongoose");

module.exports = () => {
    mongoose.connect(process.env.DBConnection)
        .then(() => {
            console.log("dataBase Connected");
        })
        .catch((errror) => {
            console.log(errror.message);
        })
}