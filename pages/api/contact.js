import * as fs from "fs";

import Contact from "../../models/Contact";
import connectDb from "../../middleware/database";

async function handler(req, res) {
  if (req.method === "POST") {
    // TODO check if the request body is valid
    let contact = await Contact.create(req.body);

    res.status(201).json({ message: "message saved", ...req.body });
  }
}

export default connectDb(handler);
