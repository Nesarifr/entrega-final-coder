import { MongoContainer } from "../../manager/mongo.manager.js";
import { logger } from "../../../logs/logger.js";

class UserDaoMongo extends MongoContainer{
    constructor(model){
        super(model);
    }
    async getByEmail(emailUser) {
        try {
            let result = await this.model.find({ email: emailUser })
            const data = JSON.parse(JSON.stringify(result))
            if (data.length) {
                return data
            } else {
                return { message: `No se encontro el objeto con el email: ${emailUser}  `  }
            }
        }
        catch (error) {
            logger.error(`Ocurrio un error en la busqueda del objeto con email : ${emailUser} :  ${error}`)
            throw new Error(`Ocurrio un error en la busqueda del objeto con email : ${emailUser} :  ${error}`)
        }
    }
}

export {UserDaoMongo}

