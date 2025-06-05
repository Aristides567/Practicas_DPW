import express from "express"
import cors from "cors"
import { MongoClient } from "mongodb"
import dotenv from "dotenv"

dotenv.config()

const app = express()

//Aca es para poder acceder a uploads 
app.use("/uploads", express.static("uploads"));

app.use(cors())
app.use(express.json())

const cliente = new MongoClient(process.env.MONGO_URI)
await cliente.connect()

const db = cliente.db("Miapp")
const usuarios = db.collection("usuarios")

app.post("/registrar", async (req, res) => {
    const {nombre, email, password} = req.body

    const existente = await usuarios.findOne({email})

    if(existente){
        return res.status(400).json({mensaje: "El usuario ya existe"})
    }

    await usuarios.insertOne({nombre, email, password})
    res.json({mensaje: "Usuario registrado correctamente"})
})


app.post("/login", async (req, res) => {

    const { email, password} = req.body
    const usuario = await usuarios.findOne({email, password})

    if(!usuario){
        return res.status(401).json({mensaje: "Credenciales incorrectas"})
    }

    res.json({mensaje: "Bienvenido", nombre: usuario.nombre})
})

app.get("/productos", async (req, res) => {
    const productos = await db.collection("productos").find().toArray()
    res.json(productos)
})

app.listen(3000, ()=>{
    console.log("Servidor escuchando")
})