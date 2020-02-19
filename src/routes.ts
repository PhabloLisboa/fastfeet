import { Router } from "express";
// import UserController from "./app/controllers/UserController";
import RecipientController from "./app/controllers/RecipientController";

const route = Router();

route.post("/", RecipientController.store);

export default route;
