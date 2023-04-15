import { logger } from "../logs/logger.js";
import { DaoProduct } from "../DB/index.dao.js";


export const getProducts = async () => {
    try {
        logger.info("Service - Se pide lista completa de productos");       
        return await DaoProduct.getAll();
    } catch (error) {
        let msgError =
            `Ocurrio un error en la busqueda de todos los  objetos  : ` + error;
        logger.error(msgError);
        throw new Error(msgError);
    }
};

export const getProductsID = async (id) => {
    try {
        const existsProducto = await DaoProduct.getById(id);
        if (existsProducto.length) {
            logger.info("Se busca el producto por ID: " + id);
            return existsProducto;
        } else return res.json({ error: "No existe el producto solicitado" });
    } catch (error) {
        let msgError =
            `Ocurrio un error en la busqueda de un objeto  : ` + error;
        logger.error(msgError);
        throw new Error(msgError);
    }
};

export const addNewProduct = async (product) => {
    try {
        const newId = await DaoProduct.save(product);
        logger.info(
            `Se crea un nuevo producto con id: ${newId} llamado: ${product.title}`
        );
        return ({
            id: newId,
            nuevoProduct: product,
        });
    } catch (error) {
        let msgError =
            `Ocurrio un error al intentar guardar el nuevo objeto ${product}  : ` +
            error;
        logger.error(msgError);
        throw new Error(msgError);
    }
};

export const updateNewProduct = async (product, id) => {
    try {
        const actualizacion = await DaoProduct.updateById(
            product,
            parseInt(id)
        );
        if (actualizacion) {
            logger.info(
                `Se actualizo el elemento: ` +
                (await DaoProduct.getById(id))
            );
            return { message: "Se actualizo el elemento solicitado con id:" + id };
        } else return { error: "No se pudo actualizar el producto solicitado" };
    } catch (error) {
        let msgError =
            `Ocurrio un error al intentar guardar el nuevo objeto ${element.id}  : ` +
            error;
        logger.error(msgError);
        throw new Error(msgError);
    }
};

export const deleteProduct = async (id) => {
    try {
        const productID = await DaoProduct.getById(id);
        if (productID.length) {
            //getById devuelve null en caso de que no exita el elemento con ID
            await DaoProduct.deletedById(parseInt(id));
            logger.info(`Se borra el elemento con id : ${id}`);
            return { message: "Producto eliminado" };
        } else {
            return { message: "El producto no existe" };
        }
    } catch (error) {
        let msgError =
            `Ocurrio un error al intentar borrar el objeto con id : ${id}  : ` +
            error;
        logger.error(msgError);
        throw new Error(msgError);
    }
};

export const deleteAll = async () => {
    try {
        await DaoProduct.deleteAll();
        return { message: "Productos eliminados" };
        } 
    catch (error) {
        let msgError =
            `Ocurrio un error al intentar borrar el objeto con id : ${id}  : ` +
            error;
        logger.error(msgError);
        throw new Error(msgError);
    }
};