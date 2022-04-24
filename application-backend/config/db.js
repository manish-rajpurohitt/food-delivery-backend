const mongoose = require("mongoose");

const connectDb = async ()=>{
    console.log(process.env.MONGO_URL);
    await mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: false
    });

    console.log("Mongodb connected");
}

module.exports = connectDb;