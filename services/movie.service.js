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
            const movies = await models.Movie.findAll();
            return movies;
        } catch (error) {
            throw error
        };
    };

    async findOne(id){
        try {
            const movie = await models.Movie.findByPk(id , {
                include:['category','characters']
            });
            return movie;
        } catch (error) {
            throw error
        };
    };

    async update(id,changes){
        try {
            const movie = await this.findOne(id);
            const updateMovie = await movie.update(changes);
            return updateMovie;
        } catch (error) {
            throw Boom.notFound('movie not found');
        };
    };

    async delete(id){
        try {
            const movie = await this.findOne(id);
            await movie.destroy();
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