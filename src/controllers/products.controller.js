import {logger} from '../logs/logger.js';
import * as ProductsService from '../services/products.services.js';

//realizar valdaciones del controller

export const getAllProducts =  async (req, res)=>{
    try{
        let listProducts;
        logger.info("Controller - Se pide lista completa de productos" )
        listProducts = await ProductsService.getProducts()
        return res.status(200).json(listProducts)
    }
    catch(error){
        logger.error("error en productos get "+ error)
        res.status(500).send('Error en el servidor')
    }
}

export const getProductoID = async (req, res)=>{
    try{
        const {id} = req.params
        const product = await ProductsService.getProductsID(id)
        return res.status(200).json(product)
    }
    catch(error){
        logger.error("Error en productos get id "+ error)
        res.status(500).send('Error en el servidor')
    }
}

export const addNewProduct = async (req, res)=> {
    try{
        const loadProduct = req.body
        const newProduct = await ProductsService.addNewProduct(loadProduct)
        return res.status(200).json(newProduct)
    }catch(error){
        logger.error("Error: " + error)
        res.status(500).send('Error en el servidor' + error)
    }    
}

export const updateProduct =  async (req, res)=>{
    try{
        const {id} = req.params
        const upDate = req.body
        const response = await ProductsService.updateNewProduct(upDate, id)
        return res.status(200).json(response)
    }
    catch(error){
        logger.error("Error: " + error)
        res.status(500).send('Error en el servidor')
    }
}

export const deleteProduct = async (req, res)=>{
    try{
        const {id} = req.params
        const response =  await ProductsService.deleteProduct(id)
        return res.status(200).json(response)
    }
    catch(error){
        logger.error("Error: " + error)
        res.status(500).send('Error en el servidor')
    }
}

export const deleteAll = async (req, res)=>{
    try{
        const response =  await ProductsService.deleteAll()
        return res.json(response)
    }
    catch(error){
        logger.error("Error: " + error)
        res.status(500).send('Error en el servidor')
    }
}