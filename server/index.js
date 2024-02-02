const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes/routes.js')

app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`));
app.use(cors());
app.use(express.json());
app.use('/',routes);