import express from "express";
import cors from 'cors';
import sql from "mysql";

const app = express();
app.use(cors());

// Change the port to 3001
const PORT = 3001;

// Add a root route handler
app.get("/", (req, res) => {
    res.json({
        status: "success",
        message: "Server is running"
    });
});

app.get("/api", (req, res) => {
    res.json({
        status: "success",
        message: "HELLO",
        data: {
            // Add any additional data you want to send to frontend
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});