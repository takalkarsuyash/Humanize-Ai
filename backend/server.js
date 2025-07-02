const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const apiRoutes = require("./routes/api");
const authRoutes = require("./routes/auth");

app.use(cors());
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("GPT to Human Language Converter Backend is running.");
});

// Basic error handler middleware
app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
