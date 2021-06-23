import mongoose from "mongoose";

<<<<<<< HEAD
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
=======
const servicesSchema = new mongoose.Schema(
    {
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
        },
>>>>>>> 68a825bc8595398506d958e3309cad1faa5f72f8
    },
    { timestamps: true }
);

const servicemanSchema = mongoose.Schema(
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
        latitude: {
            type: Number,
        },
        longitude: {
            type: Number,
        },
        averagePrice: {
            type: Number,
        },
        serviceslist: [servicesSchema],
    },
    { timestamps: true }
);

export default mongoose.model("serviceman", servicemanSchema);
