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
        serviceslist: [servicesSchema],
    },
    { timestamps: true }
);

export default mongoose.model("customer", customerSchema);
