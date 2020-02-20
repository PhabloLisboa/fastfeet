import { Router } from "express";
import SessionController from "./app/controllers/SessionController";
import UserController from "./app/controllers/UserController";
import RecipientController from "./app/controllers/RecipientController";

const route = Router();

route.post("/auth", SessionController.store);

route.get("/users", UserController.get);
route.get("/users/:id", UserController.show);
route.post("/users", UserController.store);
route.put("/users/:id", UserController.update);
route.delete("/users/:id", UserController.delete);

route.get("/recipients", RecipientController.get);
route.get("/recipients/:id", RecipientController.show);
route.post("/recipients", RecipientController.store);
route.put("/recipients/:id", RecipientController.update);
route.delete("/recipients/:id", RecipientController.delete);

export default route;
