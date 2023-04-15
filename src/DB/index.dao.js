import { MongoClient } from "../DB/clients/mongooseConnection.Config.js";
import {options} from "../config/configuration.js"
import {logger} from "../logs/logger.js";

const databaseType = options.server.BASE_DATATYPE
logger.info("se aplica la base de datos "+databaseType)

async function getApiDao(tipoDB) {
    let DaoProduct;
    let DaoCart;
    switch (tipoDB) {
        // case "archivos":
        //     const {ProductsDaoArchivos} = await import("./productos/productDaoArchivo.js");
        //     const {CartsDaoArchivos} = await import("./carritos/carritoDaoArchivo.js");
        //     ContenedorDaoProductos = new ProductsDaoArchivos("productos");
        //     ContenedorDaoCarritos = new CartsDaoArchivos("carrito");
        //     break;
        // case "sql":
        //     const {ProductsDaoSql} = await import("./productos/productDaoSql.js");
        //     const {CarritoDaoSql} = await import("./carritos/carritoDaoSql.js");
        //     ContenedorDaoProductos = new ProductsDaoSql(optionsSqliteDB, "productos");
        //     ContenedorDaoCarritos = new CarritoDaoSql(optionsSqliteDB,"carrito");
        // break;
        case "mongo":
            const { ProductDaoMongo } = await import(
                "./daos/product/product.dao.mongo.js"
            );
            const { CarritoDaoMongo } = await import(
                "./daos/cart/cart.dao.mongo.js"
            );
            const { productModel } = await import(
                "./models/mongoDB/product.model.js"
            );
            const { cartModel } = await import(
                "./models/mongoDB/cart.model.js"
            );
            const MongoBD =  new MongoClient()
            await MongoBD.connection()
            DaoProduct = new ProductDaoMongo(productModel);
            DaoCart = new CarritoDaoMongo(cartModel);
            break;
        // case "firebase":
        //     const {ProductsDaoFirebase} = await import("./productos/productDaoFirebase.js");
        //     const {CarritoDaoFirebase} = await import("./carritos/carritoDaoFirebase.js");
        //     ContenedorDaoProductos = new ProductsDaoFirebase("productos");
        //     ContenedorDaoCarritos = new CarritoDaoFirebase("carritos");
        //     break;
        default:
            break;
    }
    return {DaoProduct, DaoCart}
}

let {DaoProduct, DaoCart} = await getApiDao(databaseType)
export {DaoProduct, DaoCart}