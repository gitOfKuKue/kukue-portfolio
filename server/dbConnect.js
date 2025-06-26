// dbConnect.js
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://kukue014:Hv8WCW6NlH6wvQt5@cluster0.zirvebr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
    const database = client.db("myDatabase"); // Replace with your DB name
    const collection = database.collection("myCollection"); // Replace with your collection
    const result = await collection.find().toArray(); // Example read
    console.log(result);
  } catch (err) {
    console.error("MongoDB connection error:", err);
  } finally {
    await client.close(); // Optional: close after done
  }
}

connectDB();
