// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await MongoClient.connect(
    "mongodb+srv://admin:admin@cluster0.hz4euk1.mongodb.net/?retryWrites=true&w=majority"
  );

  if (req.method === "POST") {
    const db = client.db();
    await db.collection("email").insertOne({ email: req.body.email });
    client.close();

    res.status(200).json({ message: "Signed up!" });
  }
}
