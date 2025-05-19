import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

const app = express();
app.use(cors())
app.use(express.json())
//CREAR CLIENTE PARA PODER ACCEDER A NUESTRO CLOSTER EN MONGODB
const client = new MongoClient(process.env.MONGO_URI);
await client.connect();
//ESTO ES PARA DEFINIR A QUE BASE DE DATOS VAMOS A INGRESAR Y LO MISMO PARA SU COLLECTION
const db = client.db('Miapp');
const usuarios = db.collection('usuarios');

//RUTA PARA REGISTRARSE
app.post('/auth/register', async (req, res) => {
    const {name, email, password} = req.body;
    //Para validad que no haya mas de un usuario con el mismo correo
    const exist = await usuarios.findOne({email});
    if(exist) return res.status(400).json({mensaje: "El usuario ya existe"});

    await usuarios.insertOne({name, email, password})
    res.json({mensaje: "Usuario creado"})
    
})

//RUTA PARA LOGIN
app.post('/auth/login', async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password) return res.status(400).json({ mensaje: 'Email y contraseña son requeridas'});

    try{
        const user = await usuarios.findOne({email})

        if(!user) return res.status(401).json({mensaje: 'Las credenciales son incorrectas'});

        if(password !== user.password) return res.status(401).json({message: 'La contraseña es incorrecta'});

        res.json({mensaje: 'Inicio de sesion correcto'});

    } catch(Error){
        console.error('Error en el login', Error)
        res.status(500).json({mensaje: 'Error en el servidor'})
    }
    
})

app.listen(3000, () => {
    console.log('La cagada va en la taza💤')
})





