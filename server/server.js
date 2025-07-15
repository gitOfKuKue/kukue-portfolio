import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';

const app = express();
const port = 3001;

app.use(cors());

const uri = "mongodb+srv://kukue014:Hv8WCW6NlH6wvQt5@cluster0.zirvebr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

let db; // cache the DB instance

async function connectToDB() {
  if (!db) {
    try {
      await client.connect();
      db = client.db("kukuePortfolio"); // your DB name
      console.log("✅ Connected to MongoDB Atlas");
    } catch (err) {
      console.error("❌ Failed to connect to MongoDB Atlas:", err);
    }
  }
  return db;
}

app.get('/feedbacks', async (req, res) => {
  try {
    const database = await connectToDB();
    const collection = database.collection('feedbacks');
    const feedbacks = await collection.find().toArray();
    res.json(feedbacks);
  } catch (err) {
    console.error('❌ Error fetching data:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
