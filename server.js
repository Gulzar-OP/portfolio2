const dotenv = require('dotenv');
const app = require('./src/app.js');
const connectionDB = require('./src/db/db.js');

dotenv.config();
connectionDB();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
