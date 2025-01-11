const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.uf94k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    db = client.db("allItemsDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
};

const getCollection = (collectionName) => {
  if (!db) {
    throw new Error("Database not initialized. Call connectToDatabase first.");
  }
  return db.collection(collectionName);
};

module.exports = { connectToDatabase, getCollection };
