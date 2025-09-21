// start server
const app = require('./src/app.js');

require("dotenv").config();

const connectionDB = require('./src/db/db.js');
connectionDB();

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log("server is running on port 3000");
})