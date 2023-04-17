import {logger} from '../logs/logger.js';
import * as userServices from '../services/user.services.js';
import * as login from '../services/utils/login.js';


export const loginController = async (req, res)=>{
    try{
        const {email, password} = req.body
        const user = await userServices.loginUser(email, password)
        if(!user.error){
            const accessToken = login.createToken(user)
            return res
                .setHeader('authorization-jwt', accessToken)
                .send({accessToken, user})
        }
        return res.status(401).json({message: "Usuario o contraseña incorrectos"})
    } catch(error){
        logger.error("Error en login controller " + error)
        res.status(500).send('Error en el servidor')
    }
}

export const logoutController = async (req, res)=>{
    try{
        return res.
                setHeader('authorization-jwt', "").
                status(200).
                json({message: "Sesion cerrada correctamente"})
    } catch(error){
        logger.error("Error en logout controller " + error)
        res.status(500).send('Error en el servidor')
    }
}