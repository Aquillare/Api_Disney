const {Boom} = require('@hapi/boom');
const {models} = require('../libs/sequelize');

class CharacterService {

    async create(data){
        try {
            const newCharacter = await models.Character.create(data);
            const movies = data.movies;
             movies.forEach( async (m) => {
                const movieToAdd = await models.Movie.findByPk(m);
                await newCharacter.addMovie(movieToAdd);
            });
          
            return newCharacter;
        } catch (error) {
            throw error;
        }
    }

    async find(){
        try{
            const characters = await models.Character.findAll();
            return characters;
        } catch (error){
            throw error;
        }
    }

    async findOne(id){
        try{
            const character = await models.Character.findByPk(id, {
                include:['movies']
            });
            return character;
        } catch (error){
           // throw Boom.notFound('character not found');
           throw error
        }
    }

    async update(id, changes){
        try{
           const character = await this.findOne(id);
           const updateCharacter = await character.update(changes);
           return updateCharacter;
        } catch (error){
            throw Boom.notFound('character not found');
        }
    }

    async delete(id){
        try{
            const character = await this.findOne(id);
            await character.destroy();
            return{id};
        } catch (error){
            throw Boom.notFound('character not found');
        }
    }
}

module.exports = {CharacterService};