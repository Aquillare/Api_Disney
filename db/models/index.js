const { Category, CategorySchema } = require("./category.model.js");
const { Movie, MovieSchema } = require("./movie.model.js");
const { Character, CharacterSchema } = require("./character.model.js");
const { CharacterMovie, CharacterMovieSchema} = require("./character-movie.model");


function setupModels(sequelize){
    //Inicializamos los modelos
    Category.init(CategorySchema, Category.config(sequelize));
    Movie.init(MovieSchema, Movie.config(sequelize));
    Character.init(CharacterSchema, Character.config(sequelize));
    CharacterMovie.init(CharacterMovieSchema, CharacterMovie.config(sequelize));

    //Ejecutamos las asociaciones definidas en los modelos.
    Category.associate(sequelize.models);
    Movie.associate(sequelize.models);
    Character.associate(sequelize.models);
    CharacterMovie.associate(sequelize.models);
};

module.exports = setupModels;