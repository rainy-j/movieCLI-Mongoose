require("./db/connection");
const yargs = require("yargs")
const { addMovie, listMovie, deleteMovie, updateMovie } = require('./movie/movie.methods');

const app = () => {
    if (process.argv[2] === "add") {
        addMovie({title: yargs.argv.title, actor: yargs.argv.actor});
    } 
    else if (process.argv[2] === "list") {
        listMovie();
    } else if (process.argv[2] === "delete") {
        deleteMovie();
    } else if (process.argv[2] === "update") {
        updateMovie({title: yargs.argv.title, actor: yargs.argv.actor});
    }
}

app();