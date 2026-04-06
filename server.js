'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const routes = require('./src/routes');
app.use('/api', routes);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port 3000");
});