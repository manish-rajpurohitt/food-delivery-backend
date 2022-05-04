const mongoose = require("mongoose");

const connectDb = async ()=>{
    await mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: false
    });

    console.log("Mongodb connected");
}

module.exports = connectDb;