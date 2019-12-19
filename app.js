const express = require("express");
const app =  express();
const path =  require("path");

app.set("view engine","ejs");
app.set(path.join(__dirname,"views"));

app.listen(config.port, function (err) {
    if (err) {
        console.error("No se pudo inicializar el servidor: "
            + err.message);
    } else {
        console.log("Servidor arrancado en el puerto 3000");
    }
});