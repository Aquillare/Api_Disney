const { Model, DataTypes, Sequelize } = require('sequelize');

const MOVIE_TABLE = 'movies';

const MovieSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name:{
        allowNull: false,
        unique: true,
        type: DataTypes.STRING(40),
    },
    image:{
        allowNull: false,
        type: DataTypes.STRING
    },
    creationDate:{
        allowNull: false,
        type: DataTypes.STRING
    },
    createdAt:{
        allowNull: false,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
        type: DataTypes.DATE
    }
};

class Movie extends Model{
    static associate(models){
        this.belongsToMany(models.Category,{
            as: 'categories',
            through: models.MovieCategory,
            foreignKey:'movieId',
            otherKey:'categoryId'
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
}

module.exports = { MOVIE_TABLE, MovieSchema, Movie};