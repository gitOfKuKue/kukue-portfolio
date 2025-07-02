import { MongoClient } from "mongodb";

const uri = "mongodb+srv://kukue014:Hv8WCW6NlH6wvQt5@cluster0.zirvebr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

const feedbacks = [
  {
    id: 1,
    name: "Aung Min",
    time: "18.3.2025",
    image: "#",
    position: "Software Engineer",
    organization: "TechBridge Myanmar",
    email: "aungmin@gmail.com",
    feedback:
      "Great collaboration and clear communication throughout the project. Looking forward to working together again!",
  },
  {
    id: 2,
    name: "Su Su",
    time: "21.4.2025",
    image: "#",
    position: "Founder",
    organization: "Dream",
    email: "susu@gmail.com",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos voluptas magni error hic voluptate minima.",
  },
  {
    id: 3,
    name: "Moe Thiri",
    time: "10.5.2025",
    image: "#",
    position: "UI/UX Designer",
    organization: "DesignLab",
    email: "moethiri@designlab.com",
    feedback:
      "Your frontend implementation matched the designs perfectly. The project was delivered on time and exceeded expectations!",
  },
  {
    id: 4,
    name: "Zaw Tun",
    time: "01.6.2025",
    image: "#",
    position: "Project Manager",
    organization: "NextGen Solutions",
    email: "zawt@nextgensolutions.com",
    feedback:
      "A very responsive and responsible developer. Handled scope changes and bugs smoothly. Highly recommended!",
  },
  {
    id: 5,
    name: "Ei Mon",
    time: "25.6.2025",
    image: "#",
    position: "Marketing Specialist",
    organization: "Creative Minds",
    email: "ei.mon@creativeminds.com",
    feedback:
      "The website speed and SEO optimizations were spot-on. Our team was impressed with the final results and support.",
  }
];

async function insertFeedbacks() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas");

    const db = client.db("kukuePortfolio");
    const collection = db.collection("feedbacks");

    const result = await collection.insertMany(feedbacks);
    console.log("🎉 Inserted documents:", result.insertedCount);
  } catch (err) {
    console.error("❌ Insert error:", err.message);
  } finally {
    await client.close();
  }
}

insertFeedbacks();
