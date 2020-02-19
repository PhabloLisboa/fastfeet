import { Router } from "express";
import UserController from "./app/controllers/UserController";
// import RecipientController from "./app/controllers/RecipientController";

const route = Router();

route.get("/users", UserController.get);
route.get("/users/:id", UserController.show);
route.post("/users", UserController.store);
route.put("/users/:id", UserController.update);
route.delete("/users/:id", UserController.delete);

export default route;
