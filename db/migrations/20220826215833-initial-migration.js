'use strict';

const { DataTypes, Sequelize } = require('sequelize');
const {CATEGORY_TABLE} = require('../models/category.model.js');
const {MOVIE_TABLE} = require('../models/movie.model.js');
const {CHARACTER_TABLE} = require('../models/character.model.js'); 
const {CHARACTER_MOVIE_TABLE} = require("../models/character-movie.model");

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

    await queryInterface.createTable(CHARACTER_MOVIE_TABLE, {
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
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable( CHARACTER_MOVIE_TABLE);
    await queryInterface.dropTable( CHARACTER_TABLE);
    await queryInterface.dropTable( MOVIE_TABLE);
    await queryInterface.dropTable( CATEGORY_TABLE);
    
  }
};
