import express from "express";
import morgan from "morgan";
import taskRoutes from './routes/tasks.routes.js'
import authRoutes from './routes/auth.routes.js'

//middlewares
const app= express();
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended:false}))


//routes
app.get('/',(req,res)=> res.json({message: "welcome to my API"}))
app.use('/api',taskRoutes);
app.use('/api',authRoutes)

//errores hander
app.use((err,req,res,next)=>{
    res.status(500).json({
        status:"error",
        message: err.message
    })
} )

export default app;