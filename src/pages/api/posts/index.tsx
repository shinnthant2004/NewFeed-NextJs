import { connectDatabase, getAllPosts, insetDocument } from "@/utils/db-utils";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req:NextApiRequest,res:NextApiResponse) => {
  const client = await connectDatabase()  
  
  if(req.method === "POST"){
   await insetDocument(client,{name:"shinn thant"},"post")   
   res.status(201).json({message:"created"})
  }else if(req.method === "GET"){
    const data = await getAllPosts(client,"post")
    res.status(200).json({
        message:"success",
        posts: data
    })
  }

  client.close()
}

export default handler