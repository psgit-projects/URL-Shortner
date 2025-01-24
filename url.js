import mongoose from "mongoose";

// Define the schema for URLs
const urlSchema = new mongoose.Schema({
    shortCode: {
        type: String,
        required: true, // Ensures shortCode is always provided
        unique: true,   // Ensures each shortCode is unique
    },
    longUrl: {
        type: String,
        required: true, // Ensures longUrl is always provided
    },
}, {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
});

// Create and export the model
export const Url = mongoose.model("Url", urlSchema);
