const {Boom} = require('@hapi/boom');
const {models} = require('../libs/sequelize');

class CharacterService {

    async create(data){
        try {
            const newCharacter = await models.Character.create(data);
            return newCharacter;
        } catch (error) {
            throw error;
        }
    }

    async find(){
        try{
            return this.characters;
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
            throw Boom.notFound('character not found');
        }
    }

    async update(id, changes){
        try{
            return {
                id,
                changes
            };
        } catch (error){
            throw Boom.notFound('character not found');
        }
    }

    async delete(id){
        try{
            return {id};
        } catch (error){
            throw Boom.notFound('character not found');
        }
    }
}

module.exports = {CharacterService};