require('dotenv').config();
const express = require("express"),
    app = express(),
    PORT = 4500 || process.env.PORT,
    route = require("./routes/route"),
    connectToDb = require("./db/db"),
    MONGO_URL = process.env.MONGO_URL;
const hostName = '0.0.0.0';
const cors = require("cors");


app.use(cors({
    origin: "*",
}))
app.use(express.json());
app.use('/api/v1', route);




connectToDb(MONGO_URL, () => {
    app.listen(PORT,hostName, () => {
        console.log(`server is running on http://${hostName}:${PORT}`);
    })
})
