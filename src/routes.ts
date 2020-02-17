import { Router } from "express";
import UserController from "./app/controllers/UserController";

const route = Router();

route.get("/", UserController.store);

export default route;
