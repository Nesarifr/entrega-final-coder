import  express  from "express";
import { routerProducts } from "./routes/products.routes.js";
import {routerCarts} from "./routes/carts.routes.js";
import {routerLogin} from "./routes/login.routes.js";
import {routerRegister} from "./routes/register.routes.js";
import { routerUsers } from "./routes/users.routes.js";

/* ------------------- Constantes de rutas ------------------- */
const router = express.Router();

/* ------------------- rutas /api ------------------- */
router.use( '/productos',routerProducts)
router.use( '/carrito',routerCarts)
router.use('/login', routerLogin)
router.use('/register', routerRegister)
router.use('/users', routerUsers)







/* ------------------- exports------------------- */
export {router as apiRouter};



//Desarrollar  '/' que redireccione en caso de estar logueado a productos, en caso contrario a login

//TODO resolver status en cada services para devolver en los controllers
//TODO resolver DTOS para informacion productos, usuarios, carts