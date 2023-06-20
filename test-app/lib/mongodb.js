import {mongoose, model, models, connection } from "mongoose";

export const connectMongoDB = async() => {

    if(connection.isConnected){
        return
    }
    try {
        const db = await mongoose.connect(process.env.MONGO_DB_URI, {
            newURLParser: true,
        })
        connection.isConnected = db.connections[0].readystate
    } catch (error) {
        console.log(error)
    }
    
}


const schema = new mongoose.Schema({
   emailId: {type: String, required: true} ,
   address : {type: String, required: true} ,
   publickey: {type: String, required: true} ,
})

const Data = mongoose?.models?.Data || mongoose.model("Data", schema);

export default Data