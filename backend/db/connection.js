const mongoose = require("mongoose");

const mongoose_connection = async (app) => {
  try {
    console.log("DB_URL:", process.env.DB_URL); // ✅ debug (temporary)

    await mongoose.connect(process.env.DB_URL);
    console.log("✅ DB connected successfully");

    const PORT = process.env.PORT || 8080;
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
  }
};

module.exports = mongoose_connection;
