import { logger } from "../logs/logger.js";
import * as userServices from "../services/user.services.js";

export const registerUser = async (req, res) => {
    try {
        const user = req.body
        const newUserId = await userServices.registerUser(user)
        if(newUserId.error){
            return res.json(newUserId)
        }
        res.json({...newUserId, ... user})
    } catch (error) {
        logger.error("Error en productos get id "+ error)
        res.status(500).send('Error en el servidor')
    }
}