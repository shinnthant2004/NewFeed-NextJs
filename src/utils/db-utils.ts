const { MongoClient } = require('mongodb');
export const URI = process.env.VITE_REACT_APP_BACKEND_SERVER

export const connectDatabase = async () => {
  const client = await MongoClient.connect("mongodb+srv://shinnthant:4OFUMU3JHeWUvY8w@cluster0.oewnp2h.mongodb.net/newfeeds?retryWrites=true&w=majority");  
  return client
}

export const insetDocument = async (client:any,document:any,field:string) => {
  const db = client.db()
  const result = await db.collection(field).insertOne(document)
  return result
}

export const getAllPosts = async (client:any,field:string) => {
  const db = client.db()
  const data = await db.collection(field).find().sort({id:-1}).toArray();
  return data
}