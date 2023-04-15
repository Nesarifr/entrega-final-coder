import {DaoCart} from "../DB/index.dao.js";
import {logger} from "../logs/logger.js";


export const getCartId = async (id) => {
    try {
        const existCarrito = await DaoCart.getById(id)
        if (!existCarrito.message) {
            logger.info("Se busca el carrito por ID: " + id)
            return existCarrito
        } else {
            return { message: `No se encontro el objeto con el id : ${id} : ` + error }
        }
    }
    catch (error) {
        let msgError=`Ocurrio un error en la busqueda del objeto con id : ${id} : ` + error 
        logger.error(msgError)
        throw new Error(msgError)
    }
}

export const getAllCarts = async () => {
    try {
        const objects = await DaoCart.getAll()
        return objects;
    } catch (error) {
        let msgError=`Ocurrio un error en la busqueda de todos los  objetos  : ` + error 
        logger.error(msgError)
        throw new Error(msgError)
    }
}

export const addProducts = async (element) => {
    try {
        const newID = await DaoCart.save(element)
        logger.info(`Se crea un nuevo carrito con id: ${newID}`);
        return ({id: newID, newProduct: element.products})
    } catch (error) {
        let msgError=`Ocurrio un error al intentar guardar el nuevo objeto ${element.userID}  : ` + error 
        logger.error(msgError)
        throw new Error(msgError)
    }
}
export const updateById = async (body, id) => {
    try {
        let elementUpdated = await DaoCart.updateByUserMail({ id: id }, body)
        return elementUpdated
    } catch (error) {
        let msgError=`Ocurrio un error en la actualizacion de objeto con id ${id}  : ` + error 
        logger.error(msgError)
        throw new Error(msgError)
    }

}
export const deleteCart = async (id) => {
    try {
        const carritoId = await DaoCart.getById(id)

        if (carritoId.length) { //getById devuelve null en caso de que no exita el elemento con ID
            await DaoCart.deletedById(id)
            logger.info( "Carrito eliminado")
            return ({ message: "Carrito eliminado" })
        } else
            return ({ error: "El carrito no existe" })
    }
    catch (error) {
        let msgError=`Ocurrio un error al intentar borrar el objeto con id : ${id}  : ` + error
        logger.error(msgError)
        throw new Error(msgError)
    }
}
