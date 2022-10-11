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
            const categories = await models.Category.findAll();
            return categories;
        } catch (error) {
            throw error;
        };
    };

    async findOne(id){
        try {
            const category = await models.Category.findByPk(id, {
                include:['movie']
            });
            return category;
        } catch (error) {
            throw error;
        };
    };

    async update(id, changes){
        try {
            const category = await this.findOne(id);
            const updateCategory = await category.update(changes);
            return updateCategory;
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