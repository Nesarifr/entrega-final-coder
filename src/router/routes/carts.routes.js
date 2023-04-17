import Express from "express";
import { checkLogin } from "../middlewares/login.js"; //checkLogin revisar JWT

import * as CarritoController from "../../controllers/carts.controller.js"


/* ------------------------ configuracion del routerCarts ------------------------ */
export const routerCarts = Express.Router();


routerCarts.use(Express.json());
routerCarts.use(Express.urlencoded({extended: true}))

/* ------------------------------ GET: '/' ------------------------------ */
// Me permite listar todos los carritos disponibles
/* -------------- (disponible para usuarios y administradores) -------------- */
routerCarts.get('/', checkLogin,  CarritoController.getCarritosController )

/* ------------------------------ GET: '/:id?' ------------------------------ */
// Me permite listar todos los carritos disponibles ó un carrito por su id 
/* -------------- (disponible para usuarios y administradores) -------------- */
routerCarts.get('/:id',checkLogin, CarritoController.getCarritosControllerID)

/* -------------------------------- POST: '/' ------------------------------- */
/* ------------------ Para incorporar carritos al listado ------------------ */
/* --------------------  ------------------- */
routerCarts.post('/',checkLogin, CarritoController.postCarritosController)

/* -------------------------------- POST: '/comprar' ------------------------------- */
/* ------------------ Para incorporar carritos al listado ------------------ */
/* --------------------  ------------------- */
routerCarts.post('/comprar', checkLogin, CarritoController.postCarritosControllerComprar)

/* ----------------------------- DELETE: '/:id' ----------------------------- */
/* ----------------------- Borra un carrito por su id ---------------------- */
/* -------------------- (disponible para administradores) ------------------- */
routerCarts.delete('/:id',checkLogin,  CarritoController.deleteCarritosController )
