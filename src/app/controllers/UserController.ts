import { Request, Response } from "express";
import User from "../models/User";

class UserController {
  async store(req: Request, resp: Response): Promise<Response> {
    const { name, email } = await User.create(req.body);
    return resp.json({ message: "success", name, email });
  }

  async update(req: Request, resp: Response): Promise<Response> {
    const user = await User.findByPk(req.params.id);
    user.update(req.body);

    const { name, email } = user;
    return resp.json({ message: "success", name, email });
  }
  // async update(req, resp): Promise<Response> {}
  // async update(req, resp): Promise<Response> {}
}

export default new UserController();
