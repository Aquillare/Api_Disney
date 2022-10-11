const { Model, DataTypes, Sequelize } = require('sequelize');
const {CATEGORY_TABLE} = require('./category.model');



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
    rating:{
        allowNull:false,
        type: DataTypes.INTEGER,
    },
    categoryId:{
        allowNull: false,
        field: 'category_id',
        type: DataTypes.INTEGER,
        references:{
          model: CATEGORY_TABLE,
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

class Movie extends Model{
    static associate(models){
        this.belongsTo(models.Category, {as: 'category'})
        this.belongsToMany(models.Character, {through: models.CharacterMovie, as:'characters'})
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