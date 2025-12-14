import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://nahidathanikar18_db:jWcfISdGImDbtBFV@cluster0.dkigxyy.mongodb.net/sweethub').then(()=>console.log("DB Connected"));
   
}

