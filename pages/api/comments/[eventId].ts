// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (!email || !name || !text) {
      res.status(422).json("Invalid input");
      return;
    }

    const newComment = {
      id: new Date().toISOString,
      name,
      email,
      text,
    };

    res.status(201).json({ message: "Comment added" });
  }

  if (req.method === "GET") {
    const dummyList = [{ id: 1, name: "asd", text: "qwewqewqe" }];
    res.status(200).json({ comments: dummyList });
  }
}
