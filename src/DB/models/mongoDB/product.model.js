import mongoose from "mongoose";

const productCollection = "products"

export const productSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            default: 0
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        }
    }
)

export const productModel = mongoose.model(productCollection, productSchema);