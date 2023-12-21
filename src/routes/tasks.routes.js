import Router from "express-promise-router";
import {getAllTasks,getTask,createTask,updateTask,deleteTasks} from '../controllers/tasks.controller.js'
import { isAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get('/tasks',isAuth,getAllTasks)

router.get('/tasks/:id',isAuth,getTask)

router.post('/tasks',isAuth,createTask)

router.put('/tasks/:id',isAuth,updateTask)

router.delete('/tasks/:id',isAuth,deleteTasks)

export default router;
