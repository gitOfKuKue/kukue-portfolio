const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://kukue014:Hv8WCW6NlH6wvQt5@cluster0.zirvebr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

let cachedDb = null;

async function connectToDB() {
  if (cachedDb) return cachedDb;
  await client.connect();
  cachedDb = client.db("kukuePortfolio");
  return cachedDb;
}

exports.handler = async function (event, context) {
  try {
    const db = await connectToDB();
    const collection = db.collection("feedbacks");
    const feedbacks = await collection.find().toArray();

    return {
      statusCode: 200,
      body: JSON.stringify(feedbacks),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // CORS
      },
    };
  } catch (err) {
    console.error("❌ Mongo Error:", err.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
  }
};
