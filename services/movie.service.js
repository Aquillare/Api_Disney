const {Boom} = require('@hapi/boom');
const {models} = require('../libs/sequelize');

class MoviesService {

    async create(data){
        try {
            const movie = await models.Movie.create(data);
            return movie;
        } catch (error) {
            throw error;
        };
    };

    async find(){
        try {
            return this.movies;
        } catch (error) {
            throw error
        };
    };

    async findOne(id){
        try {
            const movie = await models.Movie.findByPk(id , {
                include:['characters']
            });
            return movie;
        } catch (error) {
            throw Boom.notFound('movie not found');
        };
    };

    async update(id,changes){
        try {
            return {
                id,
                changes
            }
        } catch (error) {
            throw Boom.notFound('movie not found');
        };
    };

    async delete(id){
        try {
            return {id};
        } catch (error) {
            throw Boom.notFound('movie not found');
        };
    };


};

/* Movies

Image
Name
Date
Rating
*/

module.exports = {MoviesService}