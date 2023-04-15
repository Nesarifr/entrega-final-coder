import  express  from "express";
import { routerProducts } from "./routes/products.routes.js";
import {routerCarrito} from "./routes/carts.routes.js";

/* ------------------- Constantes de rutas ------------------- */
const router = express.Router();

/* ------------------- rutas /api ------------------- */
router.use( '/productos',routerProducts)
router.use( '/carrito',routerCarrito)










/* ------------------- exports------------------- */
export {router as apiRouter};



//Desarrollar  '/' que redireccione en caso de estar logueado a productos, en caso contrario a login