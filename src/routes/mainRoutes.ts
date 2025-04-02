import { Router } from "express";
import { Request, Response } from "express";
import { createUser } from "../services/user";

export const mainRouter = Router();

mainRouter.get("/ping", (req: Request, res: Response) => {
  res.json({ pong: true });
});

mainRouter.post("/user", async (req: Request, res: Response) => {
  const user = await createUser({
    name: "Alice Kabore",
    email: "alice@hopeacts.org",
  });

  if (user) {
    res.status(201).json({ user });
  } else {
    res.status(500).json({ message: "E-mail already exists" });
  }
});
