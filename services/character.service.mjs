import { faker } from "@faker-js/faker";

class CharacterService {

    constructor(){
        this.characters = [];
        this.generate();
    }

    generate(){
        for(let i = 0; i < 20; i++){
            this.characters.push({
                image: faker.image.people(),
                name: faker.name.fullName(),
                age: Math.ceil(Math.random() * 40),
                heigth: `${Math.ceil(Math.random() * 40)} kg`,
                history: faker.lorem.lines(5),
                movies: [
                    {movie:"pelicula"}
                ]
            })
        }
    }

    async create(data){
        try {
            return data;
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
            return {id};
        } catch (error){
            throw error;
        }
    }

    async update(id, changes){
        try{
            return {
                id,
                changes
            };
        } catch (error){
            throw error;
        }
    }

    async delete(id){
        try{
            return {id};
        } catch (error){
            throw error;
        }
    }
}

export {CharacterService};