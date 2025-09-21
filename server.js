// start server
const app = require('./src/app.js');

require("dotenv").config();

const connectionDB = require('./src/db/db.js');
connectionDB();



app.listen(3000,()=>{
    console.log("server is running on port 3000");
})