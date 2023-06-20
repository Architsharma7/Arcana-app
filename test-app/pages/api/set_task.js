import Data, { connectMongoDB } from "../../lib/mongodb";

export default async function handler(req,res){
    if(req.method != "POST"){
        res.status(405).send({msg: "only post request are allowed"});
        return 
    }

    const {emailId, address, publickey} = await req.json();

    try {
        await connectMongoDB()
        Data.create({emailId, address, publickey}).then((data) => {
            console.log(data)
            res.status(201).send(data)
        })

    } catch (error) {
        console.log(error)
        res.status(400).send({error, msg: "something went wrong"});
    }
}