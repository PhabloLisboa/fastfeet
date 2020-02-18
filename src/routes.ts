import { Router } from "express";
import UserController from "./app/controllers/UserController";

const route = Router();

route.post("/", UserController.store);

export default route;
