// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await MongoClient.connect(
    "mongodb+srv://admin:admin@cluster0.hz4euk1.mongodb.net/?retryWrites=true&w=majority"
  );
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { email, name, text } = req.body.commentData;

    if (!email || !name || !text) {
      res.status(422).json("Invalid input");
      return;
    }

    const comment = {
      eventId,
      name,
      email,
      text,
    };

    const db = client.db();
    await db.collection("comments").insertOne({ comment });
    client.close();

    res.status(201).json({ message: "Comment added" });
  }

  if (req.method === "GET") {
    const db = client.db();
    const comments = await db.collection("comments").find().sort({_id: -1}).toArray();
    client.close();

    res.status(200).json({ comments});
  }
}
