const express = require('express')
const app = express();
const bodyParser = require("body-parser")
const connection = require("./database/database")

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
    res.render("index.html")
})

app.listen(8080, () => {
    console.log("server rodando")
})
