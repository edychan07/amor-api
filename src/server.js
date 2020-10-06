const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const prdGroup_router = require('./router/prd_group');
const app = express();

const port = process.env.PORT || 3000;

const whitelist = process.env.IP_WHITELIST.split(' ');
const corsOptions = {
    origin: function(origin, callback) {
        if(whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(prdGroup_router);

app.listen(port, () => {
    console.log(`CORS-enabled web server started on port ${port}`);
});