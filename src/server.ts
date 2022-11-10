import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { createNewUser, signIn } from './handlers/user';
import router from './router';

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/", (req, res)  => {
    console.log("Hello from Express");
    res.status(200);
    res.json({message:"Hello"})
})

app.use('/api',  router)

app.post('/user', createNewUser)
app.post('/signin', signIn)

export default app