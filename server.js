import express from 'express';
import mongoose from 'mongoose';
import { getOrignalurl, shorturl } from './controller.js';

const app = express();

// Connect to MongoDB
mongoose.connect('MONGO_DB_URL', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve the main page
app.get("/", (req, res) => {
    res.render("index.ejs", { shorturl: null });
});

// Handle short URL generation
app.post("/short", shorturl);

app.get("/:shortCode",getOrignalurl)

// Add a basic error handler
app.use((err, req, res, next) => {
    console.error("An error occurred:", err.message);
    res.status(500).send("Internal Server Error");
});

// Start the server
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
