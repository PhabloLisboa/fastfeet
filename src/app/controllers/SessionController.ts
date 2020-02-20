import { Request, Response } from "express";
import * as yup from "yup";
import jwt from "jsonwebtoken";

import User from "../models/User";
import environment from "../../config/environment";

class SessionController {
  async store(req: Request, resp: Response): Promise<Response> {
    const schema = yup.object().shape({
      email: yup
        .string()
        .email()
        .required(),
      password: yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return resp.status(400).json({ error: "Bad Request" });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return resp.status(400).json({ error: "User Not Found" });
    }
    if (!user.comparePass(password)) {
      return resp.status(400).json({ error: "Invalid Credentials" });
    }

    const { id, name } = user;

    return resp.json({
      user: {
        id,
        name,
        email
      },
      token: jwt.sign({ id }, environment.security.jwtKey, {
        expiresIn: environment.security.jwtExpires
      })
    });
  }
}

export default new SessionController();
