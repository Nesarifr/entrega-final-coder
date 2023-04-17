import mongoose from "mongoose";

const userCollecction = "usersDBtest";

const userSchema = new mongoose.Schema({
    //propiedades del usuario que vamos a guardar en la base de datos
    id:{
        type:Number,
        default:0
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    nombre:{
        type:String,
        required:true
    },
    direccion:{
        type:String,
    },
    edad:{
        type:Number,
        required:true
    },
    telefono:{
        type:String,
        required:true
    },
    fotoUrl:{
        type:String,
        required:true
    },
    rol:{
        type:String,
        default:"user"
    }
});

export const userModel = mongoose.model(userCollecction, userSchema);