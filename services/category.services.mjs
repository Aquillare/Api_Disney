import { faker } from '@faker-js/faker';

class CategoryService {

    constructor (){
        this.categories = [];
        this.generate();
    }

    generate(){

        for(let i = 0; i < 10; i++){
            this.categories.push({
                name:faker.name.fullName()
            });
        };
        
    };

    async create(data){
        try {
            return data
        } catch (error) {
            throw error;
        };
    };

    async find(){
        try {
            return this.categories;
        } catch (error) {
            throw error;
        };
    };

    async findOne(id){
        try {
            return{id};
        } catch (error) {
            throw error;
        };
    };

    async update(id, changes){
        try {
            return{
                id,
                changes
            };
        } catch (error) {
            throw error;
        };
    };

    async delete(id){
        try {
            return {id};
        } catch (error) {
            throw error;
        }
    }
};

export {CategoryService};