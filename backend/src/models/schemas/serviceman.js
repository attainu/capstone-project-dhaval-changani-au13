import mongoose from "mongoose";

const servicesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
});

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
        loc: {
            type: { type: String },
            coordinates: [],
        },
        servicelist: [servicesSchema],
    },
    { timestamps: true }
);

export default mongoose.model("serviceman", servicemanSchema);
