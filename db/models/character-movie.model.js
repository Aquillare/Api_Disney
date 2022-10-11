const { Model, DataTypes, Sequelize } = require('sequelize');
const {MOVIE_TABLE} = require('./movie.model')
const {CHARACTER_TABLE} = require('./character.model');

const CHARACTER_MOVIE_TABLE = 'character_movie';

const CharacterMovieSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    MovieId:{
        allowNull: false,
        field:'movie_id',
        type: DataTypes.INTEGER,
        references:{
            model: MOVIE_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    CharacterId:{
        allowNull: false,
        field:'character_id',
        type: DataTypes.INTEGER,
        references:{
            model: CHARACTER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    createdAt:{
        allowNull: false,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
        type: DataTypes.DATE
      }
    
};

class CharacterMovie extends Model{

    static associate(models){
        //
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: CHARACTER_MOVIE_TABLE,
            modelName: 'CharacterMovie',
            timestamps: false
        }
    }
}

module.exports = { CHARACTER_MOVIE_TABLE, CharacterMovieSchema, CharacterMovie}

