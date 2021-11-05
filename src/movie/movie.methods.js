const Movie = require('./movie.model');
const mongoose = require("mongoose");

exports.addMovie = async (movieObj) => {
    try {
        const newMovie = new Movie(movieObj);
        await newMovie.save();
        mongoose.disconnect();
        console.log("movie successfully added to DB");
    } catch (error) {
        console.log(error)
    }
};

exports.listMovie = async () => {
    try {
        console.log(await Movie.find({}));
        mongoose.disconnect();
    } catch (error) {
        console.log(error)
    }
}

exports.deleteMovie = async () => {
    try {
        await Movie.deleteOne({});
        console.log("successfully deleted movie");
        mongoose.disconnect();
    } catch (error) {
        console.log(error)
    }
}

exports.updateMovie = async (movieObj) => {
    try {
        await Movie.updateOne({title: movieObj.title}, { $set: {actor: movieObj.actor}});
        console.log("successfully updated movie");
        mongoose.disconnect();
    } catch (error) {
        console.log(error)
    }
}