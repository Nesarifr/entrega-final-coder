import { MongoContainer } from "../../manager/mongo.manager.js";

class ProductDaoMongo extends MongoContainer{
    constructor(model ){
        super(model);
    }
}

export {ProductDaoMongo}