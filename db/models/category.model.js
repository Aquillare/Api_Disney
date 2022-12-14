const { Model, DataTypes, Sequelize } = require('sequelize');

const CATEGORY_TABLE = 'categories';

const CategorySchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name:{
        allowNull: false,
        unique: true,
        type: DataTypes.STRING(20)
      },
      image:{
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

class Category extends Model{
    static associate(models){
        this.hasMany(models.Movie,{
          as: 'movie',
          foreignKey: 'categoryId'
        })
    }

    static config(sequelize){
        return{
            sequelize,
            tableName:CATEGORY_TABLE,
            modelName:'Category',
            timestamps:false
        }
    }
}

module.exports = { CATEGORY_TABLE, CategorySchema, Category}