import * as fs from "fs";

import Contact from "../../models/Contact";
import connectDb from "../../middleware/database";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const db = await connectDb();

    // TODO check if the request body is valid
    let contact = await Contact.create(req.body);

    db.disconnect();

    res.status(201).json({ message: "message saved", ...req.body });
  }
}
