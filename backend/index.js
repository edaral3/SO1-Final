const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const db = require('./app/models/index');

app.use(cors());

app.use(bodyParser.json({limit: '10mb', extendido: true}));

require("./app/routes/usuario")(app);

const dbConnect = () => {
    db.mongoose
        .connect("mongodb+srv://edgar:1234@final.bmqgx.mongodb.net/Final?retryWrites=true&w=majority")
        .catch(err => {
            console.error("** No se pudo conectar a la base de datos **");
            console.error(err);
            process.exit();
        });
    console.log("Conectado a la base de datos")
};

const server = app.listen(process.env.PORT || 5000, () => {
    api.dbConnect(db.url);
});

let api = { server: server, app: app, dbConnect: dbConnect };

module.exports = api;