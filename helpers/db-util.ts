import { MongoClient } from "mongodb";

const connectToDb = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://admin:admin@cluster0.hz4euk1.mongodb.net/?retryWrites=true&w=majority"
  );

  return client;
};

const insertDocument = async (
  client: any,
  collection: string,
  document: any
) => {
  const db = client.db();
  return await db.collection(collection).insertOne({...document});
};

const getAllDocuments = async (client: any, collection: string) => {
  const db = client.db();

  const data = await db
    .collection(collection)
    .find()
    .sort({ _id: -1 })
    .toArray();

  return data;
};

export { connectToDb, insertDocument, getAllDocuments };
