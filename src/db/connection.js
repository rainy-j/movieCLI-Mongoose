// const mongoose = require("mongoose");
const { Sequelize } = require("sequelize");
require("dotenv").config();

// const connection = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI);
//         console.log("successfully connected");
//     } catch (error) {
//         console.log(error);
//     }
// }

// connection();

const sequelize = new Sequelize(process.env.MYSQL_URI);

try {
    sequelize.authenticate();
} catch (error) {
    console.log(error);
}

module.exports = sequelize;

