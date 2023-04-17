import * as userService from '../services/user.services.js'
import {logger} from "../logs/logger.js";

export const getAllUsers = async (req, res)=>{
    try{
        const usuarios = await userService.getAll()
        return res.json(usuarios)
    }
    catch(error){
        logger.error("Error en usuario get id "+ error)
        res.status(500).send('Error en el servidor')
    }
}

export const getByEmail = async (req, res)=>{
    try{
        const email = req.query.email
        const usuario = await userService.getByEmail(email)
        return res.json(usuario)
    }
    catch(error){
        logger.error("Error en usuario get id "+ error)
        res.status(500).send('Error en el servidor')
    }
}