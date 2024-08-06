import mongoose, { Schema, model } from "mongoose";


const matchingSchema = new Schema({
    // Change me later
    transactions: {
        type: String,
        required: false
    },
    entities: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'documents'
    }],
    matching_type: String,
    matching_reason: String,
    created: Date,
    data: mongoose.Schema.Types.Mixed,
    tags: mongoose.Schema.Types.Mixed
});


const Matching = mongoose.model("Matching", matchingSchema);
export default Matching;