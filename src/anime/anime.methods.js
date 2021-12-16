const Anime = require("./anime.model.js");


exports.addAnime = async (animeObj) => {
    try {
        await Anime.sync();
        await Anime.create(animeObj)
        return`successfully Added Anime ${animeObj.title}`
    } catch(error) {
        console.log(error)
    }
}


exports.listAnime = async () => {
    try {
        console.log(await Anime.findAll({}))
    } catch(error) {
        console.log(error)
    }
}

exports.deleteAnime = async (animeObj) => {
    try {
        await Anime.destroy({
            where: {title: animeObj.title}
          })
    } catch (error) {
        console.log(error)
    }
};


exports.updateAnime = async (animeObj) => {
    try {
        await Anime.update(
            {mainCharacter: animeObj.mainCharacter},
            {where: {title: animeObj.title} }
        );
        console.log("Update might have worked");
    } catch (error) {
        console.log(error);
    }
}