import jwt from 'jsonwebtoken'
import {options} from '../../config/configuration.js'


const jwtSecret = options.server.PRIVATE_KEY || 'secret'

export const createToken =  payload =>{
    const token = jwt.sign(payload,jwtSecret,{expiresIn: '1d'})
    return token
}

export const verifyToken = token =>{
    return jwt.verify(token,jwtSecret, (err, decoded)=>{
        if(err) return ({error:"hubo un error al verificar el token: " + err});
        return decoded
    })
}
