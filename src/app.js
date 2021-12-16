const yargs = require("yargs");
const {addAnime, listAnime, deleteAnime,updateAnime} = require("./anime/anime.methods");


const app = async (args) => {
    switch (process.argv[2]) { 
        case "add":
            addAnime({title: args.title, mainCharacter: args.mainCharacter});
        break;
        case "list":
            listAnime();
        break;
        case "delete":
            deleteAnime(args.title)
        break;
        case "update":
            updateAnime({_id: args._id},{title: args.title, mainCharacter: args.mainCharacter})
        break;
        default: 
            console.log("incorrect command");
    }
}

app(yargs.argv);