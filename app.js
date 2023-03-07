const express = require("express")
const app = express()
const hbs = require("hbs")
hbs.registerPartials(__dirname+"/views/partials");
app.set("view engine", "hbs")

app.get("/:nombre&:edad",(req,res)=>{
    let mayor=false;
    if(req.params.edad>= 18){
        mayor=true;
    }

    res.render("persona",{nombre: req.params.nombre,
                          edad:   mayor,
                          movies: ["Matrix ","Matrix 2","Matrix 3"]})
})

app.listen(3001, ()=>{
    console.log("Servicio pueto 3001");
})