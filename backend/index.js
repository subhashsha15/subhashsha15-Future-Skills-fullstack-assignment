const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors = require('cors');
const cardRoutes = require('./Routes/Card.Route');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/', cardRoutes);

const PORT = 3000;

app.get('/ping', (req, res) => {
    res.json({ message: 'Server is running!' });
});

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECT);
        console.log("Mongodb connected successfully");
    } catch (error) {
        console.log("error occurred while connecting mongodb!", error)
    }
}

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});