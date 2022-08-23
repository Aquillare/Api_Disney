import faker from 'faker';

class MoviesService {

    constructor(){
        this.movies = [];
        this.generate();
    };

    generate(){
        for(let i = 0; i < 20; i++){
            this.movies.push({
                image: faker.image.nature(),
                name: faker.name,
                date: faker.date.between('2020','2022'),
                rating: Math.ceil(Math.random() * 5),
            });
        };
    };

    async create(data){
        try {
            return data;
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
            return {id};
        } catch (error) {
            throw error
        };
    };

    async update(id,changes){
        try {
            return {
                id,
                changes
            }
        } catch (error) {
            throw error;
        };
    };

    async delete(id){
        try {
            return {id};
        } catch (error) {
            throw error
        };
    };


};

/* Movies

Image
Name
Date
Rating
*/

export {MoviesService}