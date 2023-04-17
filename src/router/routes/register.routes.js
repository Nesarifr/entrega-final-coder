import Express  from "express";
import * as registerController from '../../controllers/register.controller.js'

/* ------------------------ configuracion del routerProducts ------------------------ */
export const routerRegister = Express.Router();

routerRegister.use(Express.json());
routerRegister.use(Express.urlencoded({extended: true}))

routerRegister.post('/' , registerController.registerUser)