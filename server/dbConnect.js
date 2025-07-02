import { MongoClient } from "mongodb";

const uri = "mongodb+srv://kukue014:Hv8WCW6NlH6wvQt5@cluster0.zirvebr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas");

    const database = client.db('kukuePortfolio');
    const collection = database.collection('feedbacks');

    // Example: find all
    const datas = await collection.find().toArray();
    console.log(datas);
    return datas;
  } catch (err) {
    console.error('❌ Connection error:', err);
  } finally {
    await client.close();
  }
}

export default run;

