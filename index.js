/*const { Person } = require("./person");

// require("./modules/path.js");
require("./modules/http.js");*/

//require("./modules/express.js");

const dotenv = require("dotenv");
const ConnectToDataBase = require("./src/database/connect");
dotenv.config();

ConnectToDataBase();

require("./modules/express.js");
