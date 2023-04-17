import * as dotenv from 'dotenv';
import ParsedArgs  from 'minimist';

dotenv.config();

const argumentos = ParsedArgs(process.argv.slice(2),{
    alias:{
    p: 'port',
    m: 'mode',
    e: 'env' 
    },
    default:{
        port: process.env.PORT,
        mode: process.env.MODE,
        env: process.env.ENV
    }
});


export const options = {   
    server:{
        PORT: argumentos.port,
        MODE: argumentos.mode,
        NODE_ENV: argumentos.env,
        BASE_DATATYPE: process.env.BASE_DATATYPE,
        PRIVATE_KEY: process.env.PRIVATE_KEY
    },
    mongoDB:{
        MONGOURLDB: process.env.MONGOURLBD,
        MONGOBD_AUTH: process.env.MONGOBD_AUTH,
        MONGODB_SESSION: process.env.MONGODB_SESSION
    }
}