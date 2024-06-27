import mongoose, { Schema, model } from "mongoose";

const documentSchema = new Schema({
    item_description: {
        type: String,
        required: true,
    },
    invoice_description: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    tax_percentage: {
        type: Number,
        required: true,
        default: 0
    },
    account_type: {
        type: String,
        required: true,
    },
    buyer_name: {
        type: String,
        required: false,
    },
    buyer_country: {
        type: String,
        required: false,
    },
    seller_country: {
        type: String,
        required: false,
    },
    seller_name: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const Document = mongoose.model("Document", documentSchema);
export default Document;