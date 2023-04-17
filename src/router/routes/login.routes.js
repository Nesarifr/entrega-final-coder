import Express  from "express";
import * as loginController from '../../controllers/login.controller.js'

/* ------------------------ configuracion del routerLogin ------------------------ */
export const routerLogin = Express.Router();

routerLogin.use(Express.json());
routerLogin.use(Express.urlencoded({extended: true}))

/* ------------------------------ GET: '/' ------------------------------ */
// Me permite listar todos los productos disponibles
/* -------------- (disponible para usuarios y administradores) -------------- */

routerLogin.post('/', loginController.loginController);

routerLogin.delete('/logout', loginController.logoutController);