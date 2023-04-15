import * as CartServices from "../services/cart.services.js";
import {logger} from "../logs/logger.js";


export const getCarritosController = async (req, res)=>{
    try{
        logger.info("Se pide lista completa de carritos")
            const listCarts = await CartServices.getAllCarts()
            res.json({listCarts})
        }
    catch(error){
        logger.error("CarritoControler -> Error en carritos get id "+ error)
        res.status(500).send('Error en el servidor')
    }
}

export const getCarritosControllerID = async (req, res)=>{
    try{
        const {id} = req.params
        res.json( CartServices.getCartId(id))
    }
    catch(error){
        logger.error("CarritoControler -> Error en carritos get id "+ error)
        res.status(500).send('Error en el servidor')
    }
}

export const postCarritosController = async (req, res)=> {
    try{
        if(!req.user){
            return {message: "Debe loguearse previamente, gracias!"}
        } else { 
        const loadCarrito = {userID: req.user , products: req.body }
        const response = await CartServices.addProducts(loadCarrito)
        logger.info(response)
        res.json(response) 
        }
    }catch(error){
        logger.error(`CarritoControler -> ` + error)
        res.status(500).send('Error en el servidor ' + error)
    } 
}

export const postCarritosControllerComprar = async (req, res)=> {
    try{
        if(!req.user){
            return {message: "Debe loguearse previamente, gracias!"}
        } 
        else { 
        const userID =  req.user.email
        const existeCarrito = await CartServices.getCartId(userID)
        if(existeCarrito.length){
            await CartServices.deleteCart(userID)
            return res.json({message: "Compra efectuada con exito"})
        } else {
            return res.json({message: "El carrito esta vacio"})
        }
    }
    }catch(error){
        logger.error("CarritoControler ->  " + error)
        res.status(500).send('Error en el servidor' + error)
    }    
}

export const deleteCarritosController = async (req, res)=>{
    try{
        const {id} = req.params
        res.json(CartServices.borrarCarrito(id))
    }
    catch(error){
        logger.error("CarritoControler -> " + error)
        res.status(500).send('Error en el servidor')
    }
    
}