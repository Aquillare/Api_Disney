const { Boom } = require('@hapi/boom');
const {models} = require('../libs/sequelize');

class CategoryService {

    async create(data){
        try {
            const newCategory = await models.Category.create(data);
            return newCategory;
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
            const category = await models.Category.findByPk(id);
            return category;
        } catch (error) {
            throw Boom.notFound('category not found');
        };
    };

    async update(id, changes){
        try {
            return{
                id,
                changes
            };
        } catch (error) {
            throw Boom.notFound('category not found');
        };
    };

    async delete(id){
        try {
            const category = await this.findOne(id);
            await category.destroy();
            return {id};
        } catch (error) {
            throw Boom.notFound('category not found');
        }
    }
};

module.exports = {CategoryService};