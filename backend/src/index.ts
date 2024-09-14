import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.json());
const prisma = new PrismaClient();

app.get("/", (req: Request, res: Response) => {
  res.send("home");
});

app.post("/newtodo", async (req: Request, res: Response) => {
  const result = await prisma.todo.create({
    data: {
      tittle: req.body.tittle,
    },
  });
  res.json(result);
});

app.get("/todo", async (req: Request, res: Response) => {
  const result = await prisma.todo.findFirst({});
  res.send(result);
});

app.listen(3000, () => {
  console.log("running");
});
console.log("hi");
