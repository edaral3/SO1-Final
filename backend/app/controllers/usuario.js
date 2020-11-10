const db = require("../models");
const Usuario = db.usuario

// Hacer login
exports.login = (req, res) => {
    if(!req.body.user || !req.body.pass){
        return res
        .status(400)
        .send({message: "Error, parametros incompletos."})
    }
    Usuario.findOne({user:req.body.user}, function(err, data) {
        if (err) {
            return res.status(500).json({
                message: "Error al obtener el usuario",
                db_message: err.message || ""
            });
        }
        if (!data) {
            return res.status(200).json({
                message: `El usuario no existe`
            });
        }
        if(req.body.pass == data.pass){
            return res.status(200).json({
                message: `Se encontro el usuario.`
            });
        }else{
            return res.status(200).json({
                message: `Contraseña incorrecta`
            });    
        }
    });
};

//registrar usuario
exports.registrar = (req, res) => {
    if(!req.body.user || !req.body.pass){
        return res
        .status(400)
        .send({message: "Error, parametros incompletos."})
    }
    Usuario.create({
        user: req.body.user,
        pass: req.body.pass       
    },
    (err, usuario) => {
        if (err) {
            return res.status(500).json({
                db_message: err.message || "",
                message: "Error al agregar el usuario."
            });
        }
        return res.status(200).json({
            usuario: usuario,
            message: "Usuario creado."
        });
    });

}
