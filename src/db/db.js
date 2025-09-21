const mongoose = require('mongoose');

require('dotenv').config();
function connectionDB(){
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Mongo Connected");
    })
    .catch((e)=>{
        console.log("Failed to connect : ",e);
    })
}

module.exports = connectionDB;