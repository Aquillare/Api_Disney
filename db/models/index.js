const { Category, CategorySchema } = require("./category.model.js");
const { Movie, MovieSchema } = require("./movie.model.js");
const { Character, CharacterSchema } = require("./character.model.js");
const { CharacterMovie, CharacterMovieSchema } = require("./character-movie.js");
const { MovieCategory, MovieCategorySchema } = require("./movie-category.model.js");

function setupModels(sequelize){
    Category.init(CategorySchema, Category.config(sequelize));
    Movie.init(MovieSchema, Movie.config(sequelize));
    Character.init(CharacterSchema, Character.config(sequelize));
    CharacterMovie.init(CharacterMovieSchema, CharacterMovie.config(sequelize));
    MovieCategory.init(MovieCategorySchema, MovieCategory.config(sequelize));

    Movie.associate(sequelize.models);
    Character.associate(sequelize.models);
};

module.exports = setupModels;