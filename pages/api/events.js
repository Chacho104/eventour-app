import { connectDatabase, getAllDocuments } from "@/components/helpers/db-util";

async function handler(req, res) {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }

  if (req.method === "GET") {
    try {
      const documents = await getAllDocuments(client, "events", "all-events", {
        date: 1,
      });
      res.status(200).json({ events: documents });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Getting events from the database failed!" });
    }
  }
  client.close();
}

export default handler;
