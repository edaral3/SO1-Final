module.exports = app => {
    const usuario = require("../controllers/usuario");

    var router = require("express").Router();

    // Login 
    router.get("/login", usuario.login);
    
    // Registra un usuario
    router.post("/registro", usuario.registrar);

    app.use("/", router);
};