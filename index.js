
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require('crypto');
const session = require('express-session');
const cors = require("cors"); // Import the cors middleware
const path = require("path"); // Import the path module
const {Icu, Hospital, Bedreq, Users} = require("./models/componentModel");

const app = express();
const port = process.env.PORT || 5000; 

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
//app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Serve index.html as the default page
});

const icuRoutes = require("./routes/icuRoutes");
app.use("/icus", icuRoutes);


// MongoDB connection
mongoose.connect(
  "mongodb+srv://chathurangawijayarathneeb:AzSMaBPouG5uLxEY@cluster01.nzv8k.mongodb.net/bedManager?retryWrites=true&w=majority&appName=bedManager",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
}); 

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
