const express = require('express');
const Router = require('./routes.js');
const PORT = process.env.port || 8080;
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(Router);

app.use(express.static(__dirname));

app.get("/", function (request, response){
    response.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => console.log(`Server stated on port ${PORT}`));