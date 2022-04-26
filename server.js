const express = require("express")
const app = express()
const exphbs = require("express-handlebars")
const moment = require("moment")
const {nuevoUsuario, getUsers, deleteUser} = require("./consultas")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/bootstrap", express.static(__dirname + "/node_modules/bootstrap/dist/css"))
app.use("/public", express.static(__dirname + "/public/"))

app.set("view engine", "handlebars")

app.engine("handlebars", exphbs.engine({
    layoutsDir: __dirname + "/views",
    partialsDir: __dirname + "/views/components"
}))

app.get("/", async (_, res) => {
    const todos = await getUsers()
    res.render("inicio", {
        layout: "inicio",
        todos
    })
})

app.get("/users", async (_, res) => {
    const usuarios = await getUsers()
    res.send(JSON.stringify(usuarios))
})

app.get("/user-create", (_, res) => {
    res.render("create", {
        layout: "create"
    })
})

app.post("/users", async (req, res) => {
    const {username, email, contrasena} = req.body
    const fecha = moment().locale("es").format('LLL')
    await nuevoUsuario(username, email, contrasena, fecha)
    res.redirect("/")

})

app.get("/user-delete/:id", (req, res) => {
    const {id} = req.params
    res.render("eliminar", {
        layout: "eliminar",
        id
    })
})

app.get("/users/:id", async (req, res) => {
    const {id} = req.params
    await deleteUser(id)
    res.redirect("/")
})

app.listen(4000, () => console.log("Servidor levantado en dirección: http://localhost:4000/"))