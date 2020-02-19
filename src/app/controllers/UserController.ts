import { Request, Response } from "express";
import User from "../models/User";

class UserController {
  async store(req: Request, resp: Response): Promise<Response> {
    const { name, email } = await User.create(req.body);
    return resp.json({ message: "success", name, email });
  }

  async update(req: Request, resp: Response): Promise<Response> {
    const user = await User.findByPk(req.params.id);

    const { name, email } = await user.update(req.body);
    return resp.json({ message: "success", name, email });
  }

  async get(req: Request, resp: Response): Promise<Response> {
    const userList = await User.findAll({
      attributes: {
        exclude: ["password_hash"]
      }
    });
    return resp.json(userList);
  }

  async show(req: Request, resp: Response): Promise<Response> {
    const user = await User.findByPk(req.params.id);

    if (user) {
      const { name, email, created_at, updated_at } = user;
      return resp.json({ name, email, created_at, updated_at });
    }

    return resp.status(404).send({ error: "User not found" });
  }

  async delete(req: Request, resp: Response): Promise<Response> {
    const user = await User.findByPk(req.params.id);
    const { name } = user;
    user.destroy();
    return resp.json({ message: `User ${name} was deleted` });
  }
}

export default new UserController();
