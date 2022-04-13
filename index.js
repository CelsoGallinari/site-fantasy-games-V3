const express = require('express')
const app = express();
const bodyParser = require("body-parser")
const connection = require("./database/database")

//View Engine

app.set('view engine','ejs')

//statics

app.use(express.static('public'))

//body parser

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!")
    }).catch((error) => {
        console.log(error)
    })
//Inicializando servidor

app.get("/", (req, res) => {
    res.render("views/index")
})

app.listen(8080, () => {
    console.log("server rodando")
})