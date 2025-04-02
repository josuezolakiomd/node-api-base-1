import { Router } from "express";
import { mainRouter } from "./mainRoutes";

const router = Router();

router.use("/", mainRouter);

export default router;
