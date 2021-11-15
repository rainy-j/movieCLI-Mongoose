const { Movie } = require("./movie.model");
// const mongoose = require("mongoose");

exports.addMovie = async (movieObj) => {
    // format should be const movieObj = {title: "Spiderman", actor: "Andrew Garfield"}
    try {
        await Movie.sync();
        await Movie.create(movieObj);
        // const newMovie = new Movie(movieObj);
        // await newMovie.save();
        // mongoose.disconnect();
        console.log("movie successfully added to DB");
    } catch (error) {
        console.log(error)
    }
};

exports.listMovie = async () => {
    try {
        console.log(await Movie.findAll({}));
        // mongoose.disconnect();
    } catch (error) {
        console.log(error)
    }
}

exports.deleteMovie = async (movieObj) => {
    try {
        await Movie.destroy({
            where: movieObj
        });
        console.log("successfully deleted movie");
        // mongoose.disconnect();
    } catch (error) {
        console.log(error)
    }
}

exports.updateMovie = async (movieObj) => {
    try {
        await Movie.update({title: movieObj.title}, { where: {actor: movieObj.actor}
        }
        );
        console.log("successfully updated movie");
        // mongoose.disconnect();
    } catch (error) {
        console.log(error)
    }
}