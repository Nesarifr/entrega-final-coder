import { DaoUser } from "../DB/index.dao.js"
import {logger} from '../logs/logger.js'
import * as encrypt from "./utils/encrypt.js"

export const getAll = async () => {
    try {
        logger.info("Se pide lista completa de usuarios");       
        return DaoUser.getAll();
    } catch (error) {
        let msgError =
            `Ocurrio un error en la busqueda de todos los  usuarios  : ` + error;
        logger.error(msgError);
        throw new Error(msgError);
    }
};

export const getByEmail = async (email) => {
    try {
        const existeUsuario = await DaoUser.getByEmail(email);
        if (existeUsuario.length) {
            return existeUsuario;
        } else return res.json({ error: "No existe el usuarios solicitado" });
    } catch (error) {
        let msgError =
            `Ocurrio un error en la busqueda de un usuarios  : ` + error;
        logger.error(msgError);
        throw new Error(msgError);
    }
};


export const registerUser = async user =>{
    try {
        const userExist = await DaoUser.getByEmail(user.email)
        logger.info("se pide el usuario con email: " + user.email + userExist.lenght)
        if(userExist.length){
            return ({error: "El usuario ya existe"})
        }else{
            user.password = await encrypt.encryptPassword(user.password)
            const newUserId = await DaoUser.save(user)
            return ({id: newUserId})
        }
    } catch (error) {
        let msgError =
        `Ocurrio un error al intentar registrar el usuario con  email: ${user.email}  : ` +
        error;
    logger.error(msgError);
    throw new Error(msgError);
    }
}

export const loginUser = async (email, password) =>{
    try{
        const userExist = await DaoUser.getByEmail(email)
        if(userExist.length){
            const passwordCorrect = await encrypt.comparePassword(password, userExist[0].password)
            if(passwordCorrect){
                return ({id: userExist[0].id})
            }else{
                return ({error: "Contraseña incorrecta"})
            }
        }else{
            return ({error: "El usuario no existe"})
        }
    } catch (error) {
        let msgError =
        `Ocurrio un error al intentar logear el usuario con  email: ${email}  : ` +
        error;
        throw Error(msgError);
    }
}