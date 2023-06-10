const express = require("express");
const connectDB = require("../wanderlust/client/src/config/db");

const app = express();
const PORT = process.env.PORT || 5000;


app.get("/", (req, res) => {
  res.send("API RUNNING...");
});

// Connect DB
connectDB();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.use(express.json({ extended: false })); 
app.use("/api/register", require("../wanderlust/client/src/routes/api/register"));
