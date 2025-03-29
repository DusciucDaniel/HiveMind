import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Fix for ESM (ES Module) environments
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env file explicitly
dotenv.config({ path: path.join(__dirname, ".env") });

console.log("MONGO_URI:", process.env.MONGO_URI); // Debug


import express from "express";
import mongoose from "mongoose";
import cors from "cors";

console.log("MONGO_URI:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch(err => console.error("❌ MongoDB connection error:", err));
  

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Add this line to parse URL-encoded form data
app.use(cors());
app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", (req, res) => res.send("🚀 Welcome to the Newsletter Site!"));

const EmailSchema = new mongoose.Schema({
    email: String,
    role: {
      type: String,
      enum: ["beekeeper", "landowner", "honey enjoyer"], // Restrict to these values
      required: true,
    },
  });
  
  const Email = mongoose.model("Email", EmailSchema);
  

app.post("/submit", async (req, res) => {
    try {
      const { email, role } = req.body;
  
      // Validate the role
      if (!["beekeeper", "landowner", "honey enjoyer"].includes(role)) {
        return res.status(400).send("❌ Invalid role selected");
      }
  
      const newEmail = new Email({ email, role });
      await newEmail.save();
      res.redirect("/Frontend/registered.html");
    } catch (err) {
      console.error("Error saving email:", err);
      res.status(500).send("❌ Error saving email");
    }
  });
  
  

const PORT = process.env.PORT || 6969;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
