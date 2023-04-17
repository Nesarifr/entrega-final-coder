import { MongoContainer } from "../../manager/mongo.manager.js";

class ProductDaoMongo extends MongoContainer{
    constructor(model ){
        super(model);
    }

    async getCategory(category) {
        try {
            let result = await this.model.find({ category: category })
            const data = JSON.parse(JSON.stringify(result))
            if (data.length) {
                return data
            } else {
                return { message: `No se encontro objetos con categoria : ${category}  ` }
            }
        }
        catch (error) {
            logger.error(`Ocurrio un error en la busqueda del objeto con la categoria : ${category} :  ${error}`)
            throw new Error(`Ocurrio un error en la busqueda del objeto con la categoria : ${category} :  ${error}`)
        }
    }
}

export {ProductDaoMongo}