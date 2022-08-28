const { Model, DataTypes, Sequelize } = require('sequelize');
const { MOVIE_TABLE } = require('./movie.model.js');
const { CATEGORY_TABLE } = require('./category.model.js');

const MOVIE_CATEGORY_TABLE = 'movies_categories';

const MovieCategorySchema = {
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
      movieId:{
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'movie_id',
        references:{
            model: MOVIE_TABLE,
            key: 'id'
        },
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
      },
      categoryId:{
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'category_id',
        references:{
            model: CATEGORY_TABLE,
            key: 'id'
        },
        onUpdate:'CASCADE',
        onDelete:'RESTRICT',
      },  
};

class MovieCategory extends Model{
    static associate(models){
        //
    }

    static config(sequelize){
        return{
            sequelize,
            tableName:MOVIE_CATEGORY_TABLE,
            modelName:'MovieCategory',
            timestamps:false
        }
    }
}

module.exports = { MOVIE_CATEGORY_TABLE, MovieCategorySchema, MovieCategory};

