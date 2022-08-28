const { Model, DataTypes, Sequelize } = require('sequelize');
const { CHARACTER_TABLE } = require('./character.model.js');
const { MOVIE_TABLE } = require('./movie.model.js');

const CHARACTER_MOVIE_TABLE = 'characters-movies';

const CharacterMovieSchema = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      createdAt:{
        allowNull: false,
        type: DataTypes.DATE,
        field:'created_at',
        defaultValue: Sequelize.NOW
      },
      charcaterId:{
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'character_id',
        references:{
            model: CHARACTER_TABLE,
            key: 'id'
        },
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
      },
      movieId:{
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'movie_id',
        references:{
            model: MOVIE_TABLE,
            key: 'id'
        },
        onUpdate:'CASCADE',
        onDelete:'SET NULL',
      },  
};

class CharacterMovie extends Model{
    static associate(models){
        //
    }

    static config(sequelize){
        return{
            sequelize,
            tableName:CHARACTER_MOVIE_TABLE,
            modelName:'CharacterMovie',
            timestamps:false
        }
    }
};

module.exports = { CHARACTER_MOVIE_TABLE, CharacterMovieSchema, CharacterMovie };