import { MongoClient } from "../DB/clients/mongooseConnection.Config.js";
import {options} from "../config/configuration.js"
import {logger} from "../logs/logger.js";

const databaseType = options.server.BASE_DATATYPE
logger.info("se aplica la base de datos "+databaseType)

async function getApiDao(tipoDB) {
    let DaoProduct;
    let DaoCart;
    let DaoUser;
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
            /* ---------------------------- imports dinamicas ---------------------------- */
            /* ---------------------------------- DAOS ---------------------------------- */
            const { ProductDaoMongo } = await import("./daos/product/product.dao.mongo.js");
            const { CartDaoMongo } = await import("./daos/cart/cart.dao.mongo.js");
            const { UserDaoMongo } = await import("./daos/user/user.dao.mongo.js");
            /* --------------------------------- models --------------------------------- */
            const { productModel } = await import("./models/mongoDB/product.model.js");
            const { cartModel } = await import("./models/mongoDB/cart.model.js");
            const { userModel } = await import("./models/mongoDB/user.model.js");
            /* --------------------------- Conexion con mongo -------------------------- */
            const MongoBD =  new MongoClient()
            await MongoBD.connection()

            DaoProduct = new ProductDaoMongo(productModel);
            DaoCart = new CartDaoMongo(cartModel);
            DaoUser = new UserDaoMongo(userModel);
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
    return {DaoProduct, DaoCart, DaoUser}
}

let {DaoProduct, DaoCart, DaoUser} = await getApiDao(databaseType)
export {DaoProduct, DaoCart, DaoUser}