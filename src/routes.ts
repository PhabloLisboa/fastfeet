import { Router } from "express";

const route = Router();

route.get("/", (req, resp) => resp.json({ message: "aeeee" }));

export default route;
