// const mongoose = require("mongoose");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

// const movieSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     actor: {
//         type: String,
//         unique: false,
//         required: false
//     },
    
// });

// const Movie = mongoose.model("Movie", movieSchema);

const Movie = sequelize.define("Movie", {
    title: {
        type: DataTypes.STRING, 
        allowNull: false,
    },
    actor: {
        type: DataTypes.STRING,
    }
});

const Genre = sequelize.define("Genre", {
    title: {
        type: DataTypes.STRING, 
        allowNull: false,
    },
    genre: {
        type: DataTypes.STRING,
    }
})


module.exports = {
    Movie, Genre
};