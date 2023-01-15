import Router from "express";
import usersRouter from "./usersRouter";
import booksRouter from "./booksRouter";

const router = new Router();

router.use("/users", usersRouter);
router.use("/books", booksRouter);

export default router;
