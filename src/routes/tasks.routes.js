import { Router } from "express";

const router = Router();

router.get('/tasks',(req, res)=> res.send('obteniendo tareas'))
router.get('/tasks/:id',(req, res)=> res.send('obteniendo una unica tareas'))
router.post('/tasks',(req, res)=> res.send('creando tareas'))
router.put('/tasks/:id',(req, res)=> res.send('actualizando tareas'))
router.delete('/tasks/:id',(req, res)=> res.send('eliminando tareas'))

export default router;
