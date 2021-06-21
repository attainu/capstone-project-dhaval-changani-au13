import mongoose from "mongoose";

const servicesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
    },
    rating: {
        type: Number,
        required: true,
    },
});

const customerSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
        },
        password: {
            type: String,
            required: true,
        },
        loc: {
            type: { type: String },
            coordinates: [],
        },
        serviceslist: { type: [servicesSchema], default: undefined },
    },
    { timestamps: true }
);

export default mongoose.model("customer", customerSchema);
