import express, { Request, Response } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.json());
app.use(cors());
const prisma = new PrismaClient();

// interface taskInput{
//   title: string
//   description?: string
//   duedate?: string
//   priority?: string
//   reminder?: string
//   userId: number
// }

app.get("/", (req: Request, res: Response) => {
  res.send("home");
});

//create task
app.post("/addtask", async (req: Request, res: Response) => {
  const taskData = req.body;
  const newTask = await prisma.task.create({
    data: {
      title: taskData.title,
      description: taskData.description,
      dueDate: taskData.duedate,
      priority: taskData.priority,
      userId: taskData.id,
    },
  });
  console.log("new task added");
  res.json(newTask);
});

//get tasks of users using userid
app.get("/tasks/:id", async (req: Request, res: Response) => {
  const userId = req.params.id;
  const tasks = await prisma.task.findMany({
    where: {
      userId: parseInt(userId, 10),
    },
  });
  res.json(tasks);
});

app.listen(3000, () => {
  console.log("running");
});
