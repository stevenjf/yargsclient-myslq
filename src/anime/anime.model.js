const sequelize = require("../db/connection");
const {DataTypes} = require("sequelize");


const Anime = sequelize.define("Anime", {
    title: {
        type: DataTypes.STRING,
        allowNull: false

    }, mainCharacter: {
        type:DataTypes.STRING
    },
}) 

module.exports = Anime;