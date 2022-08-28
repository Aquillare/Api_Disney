const { Model, DataTypes, Sequelize } = require('sequelize');
const {MOVIE_TABLE} = require('./movie.model');

const CHARACTER_TABLE = 'characters';

const CharacterSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name:{
        allowNull: false,
        unique: true,
        type: DataTypes.STRING(25),
    },
    image:{
        allowNull: false,
        type: DataTypes.STRING,
    },
    weight:{
        allowNull: true,
        type: DataTypes.INTEGER
    },
    age:{
        allowNull: false,
        type: DataTypes.INTEGER
    },
    history:{
        allowNull: false,
        type: DataTypes.TEXT
    },
    createdAt:{
        allowNull: false,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
        type: DataTypes.DATE
    }
};

class Character extends Model{

    static associate(models){
        this.belongsToMany(models.Movie,{
            as: 'movies',
            through: models.CharacterMovie,
            foreignKey:'characterId',
            otherKey:'movieId'
        });
    }

    static config(sequelize){
        return{
            sequelize,
            tableName:MOVIE_TABLE,
            modelName:'Movie',
            timestamps:false
        }
    }
};

module.exports = { CHARACTER_TABLE, CharacterSchema, Character};