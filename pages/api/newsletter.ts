// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDb, insertDocument } from "../../helpers/db-util";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let client;

  try {
    client = await connectToDb();
  } catch (error) {
    res.status(500).json({ message: "Server failed" });
    return;
  }

  if (req.method === "POST") {
    try {
      await insertDocument(client, "email", req.body.email);
      res.status(201).json({ message: "Signed up!" });
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed"});
      return;
    }

    client.close();
  }
}
