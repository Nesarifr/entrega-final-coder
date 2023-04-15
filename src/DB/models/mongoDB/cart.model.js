import mongoose from "mongoose";
import { productSchema } from "./product.model.js";

const cartsCollection = "carts"
const carSchema = new mongoose.Schema(
    {
        userID: {
            type: String,
            default: 0
        },
        products: {
            type: [productSchema],
            default: undefined,
            required: true
        }
    }
)

export const cartModel = mongoose.model(cartsCollection, carSchema);