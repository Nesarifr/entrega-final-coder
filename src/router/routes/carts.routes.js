import Express from "express";
import { checkLogin } from "../middlewares/login.js"; //checkLogin revisar JWT

import * as CarritoController from "../../controllers/carts.controller.js"


/* ------------------------ configuracion del routerCarrito ------------------------ */
export const routerCarrito = Express.Router();


routerCarrito.use(Express.json());
routerCarrito.use(Express.urlencoded({extended: true}))

/* ------------------------------ GET: '/' ------------------------------ */
// Me permite listar todos los carritos disponibles
/* -------------- (disponible para usuarios y administradores) -------------- */
routerCarrito.get('/', checkLogin,  CarritoController.getCarritosController )

/* ------------------------------ GET: '/:id?' ------------------------------ */
// Me permite listar todos los carritos disponibles ó un carrito por su id 
/* -------------- (disponible para usuarios y administradores) -------------- */
routerCarrito.get('/:id',checkLogin, CarritoController.getCarritosControllerID)

/* -------------------------------- POST: '/' ------------------------------- */
/* ------------------ Para incorporar carritos al listado ------------------ */
/* --------------------  ------------------- */
routerCarrito.post('/',checkLogin, CarritoController.postCarritosController)

/* -------------------------------- POST: '/comprar' ------------------------------- */
/* ------------------ Para incorporar carritos al listado ------------------ */
/* --------------------  ------------------- */
routerCarrito.post('/comprar', checkLogin, CarritoController.postCarritosControllerComprar)

/* ----------------------------- DELETE: '/:id' ----------------------------- */
/* ----------------------- Borra un carrito por su id ---------------------- */
/* -------------------- (disponible para administradores) ------------------- */
routerCarrito.delete('/:id',checkLogin,  CarritoController.deleteCarritosController )
