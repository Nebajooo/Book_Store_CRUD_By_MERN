const express = require("express");
const app = express();
const connectDB = require("./config/default");
const cors = require("cors");
const books = require("./routes/api/books");

connectDB();

app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Hello world"));

app.use("/api/books", books);
const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`server rinning on port ${port}`));
