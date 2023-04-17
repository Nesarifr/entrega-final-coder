import Express  from "express";
import * as usersController from '../../controllers/users.controller.js'

export const routerUsers = Express.Router();
routerUsers.use(Express.json());
routerUsers.use(Express.urlencoded({extended: true}))

/* ------------------------------ GET: '/' ------------------------------ */
// Me permite listar todos los productos disponibles
/* -------------- (disponible para usuarios y administradores) -------------- */
routerUsers.get('/',usersController.getAllUsers)
routerUsers.get('/search',usersController.getByEmail)



// TODO: acceso solo para administradores