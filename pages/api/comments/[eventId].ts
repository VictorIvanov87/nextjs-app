// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  connectToDb,
  getAllDocuments,
  insertDocument,
} from "@/helpers/db-util";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const eventId = req.query.eventId;
  let client;
  try {
    client = await connectToDb();
  } catch (error) {
    res.status(500).json({ message: "Server failed" });
    return;
  }

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

    try {
      await insertDocument(client, "comments", comment);
      res.status(201).json({ message: "Comment added" });
    } catch (error) {
      res.status(500).json({ message: "Adding of comment failed" });
    }

    client.close();
  }

  if (req.method === "GET") {
    try {
      const comments = await getAllDocuments(client, "comments");
      res.status(200).json({ comments });
    } catch (error) {
      res.status(500).json({ message: "Getting comments failed" });
    }
    client.close();
  }
}
