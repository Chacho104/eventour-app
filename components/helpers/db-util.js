import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect();
  return client;
}

export async function insertDocument(client, database, collection, document) {
  const db = client.db(database);

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client, database, collection, sort, filter = {}) {
  const db = client.db(database);

  const documents = await db.collection(collection).find(filter).sort(sort).toArray();

  return documents;
}
