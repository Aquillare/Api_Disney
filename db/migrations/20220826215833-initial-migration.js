'use strict';

const { DataTypes, Sequelize } = require('sequelize');
const {CATEGORY_TABLE} = require('../models/category.model.js');
const {MOVIE_TABLE} = require('../models/movie.model.js');
const {CHARACTER_TABLE} = require('../models/character.model.js'); 
const {CHARACTER_MOVIE_TABLE} = require('../models/character-movie.js');
const {MOVIE_CATEGORY_TABLE} = require('../models/movie-category.model.js');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE,{
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
    });

    await queryInterface.createTable(MOVIE_TABLE,{
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
    });

    await queryInterface.createTable(CHARACTER_TABLE,{
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
    });

    await queryInterface.createTable(CHARACTER_MOVIE_TABLE,{
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
    });

    await queryInterface.createTable(MOVIE_CATEGORY_TABLE,{
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
    });

  },

  async down (queryInterface) {
    
    await queryInterface.dropTable( CHARACTER_MOVIE_TABLE);
    await queryInterface.dropTable( MOVIE_CATEGORY_TABLE);
    await queryInterface.dropTable( CATEGORY_TABLE);
    await queryInterface.dropTable( CHARACTER_TABLE);
    await queryInterface.dropTable( MOVIE_TABLE);
  }
};
