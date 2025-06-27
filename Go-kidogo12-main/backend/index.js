// index.js
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());
app.use(express.json());

const API_BASE = "https://testapp.gokidogo.com/webapi/api.php";

// Proxy for userhome (Home.jsx)
app.post("/api/userhome", async (req, res) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_BASE}/userhome`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch userhome data", detail: err.message });
  }
});

// Proxy for restaurentdetail (RestaurantMenu.jsx)
app.post("/api/restaurentdetail", async (req, res) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_BASE}/restaurentdetail`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch restaurant details", detail: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
