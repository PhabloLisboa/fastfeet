import { Request, Response } from "express";
import * as yup from "yup";
import User from "../models/User";

class UserController {
  async store(req: Request, resp: Response): Promise<Response> {
    const { name, email } = await User.create(req.body);
    return resp.json({ message: "success", name, email });
  }

  async update(req: Request, resp: Response): Promise<Response> {
    const schema = yup.object().shape({
      name: yup.string(),
      email: yup.string().email(),
      oldPassword: yup.string().min(6),
      password: yup
        .string()
        .min(6)
        .when("oldPassword", (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: yup
        .string()
        .when("password", (password, field) =>
          password ? field.required().oneOf([yup.ref("password")]) : field
        )
    });

    if (!(await schema.isValid(req.body))) {
      return resp.status(400).send({ message: "Bad request" });
    }

    const { email, oldPassword } = req.body;
    const user = await User.findByPk(req.params.id);

    if (email && email !== user.email) {
      const userExists = await User.findOne({
        where: { email: req.body.email }
      });

      if (userExists) {
        return resp.status(400).json({ error: "Email already exists" });
      }
    }

    if (oldPassword && !(await user.comparePass(oldPassword))) {
      return resp.status(400).json({ error: "Wrong Old pass" });
    }

    const { name } = await user.update(req.body);
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

    if (user) {
      const { name } = user;
      user.destroy();
      return resp.json({ message: `User ${name} was deleted` });
    }

    return resp.status(404).send({ error: "User not found" });
  }
}

export default new UserController();
