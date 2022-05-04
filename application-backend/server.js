require('dotenv').config({path: ".env"});
const express = require("express");
const connectDb = require("./config/db");
var cors = require('cors')
const errorHandler = require('./middleware/error')

//connect to db
connectDb();
const app = express();
app.use(cors());


app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/customer', require("./routes/customerRoutes"));
app.use('/api/cart', require("./routes/cartRoute"));
app.use("/api/payments", require("./routes/paymentRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));

app.use('/api/delivery/auth', require('./routes/auth'));
app.use('/api/delivery', require('./routes/deliveryRoutes'));
app.use('/api/delivery/orders', require("./routes/orderRoutes"));

app.use('/api/restaurant/auth', require('./routes/auth'));
app.use('/api/restaurant', require("./routes/restaurantRoutes"));
app.use("/api/restaurant/orders", require("./routes/orderRoutes"));

app.use(errorHandler);
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, ()=>console.log(`Server started running on PORT : ${PORT}`));

process.on("unhandledRejection", (error, promise)=>{
    console.log("Logged error :" + error);
    server.close(()=>process.exit(1));
})