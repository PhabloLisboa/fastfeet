import { Request, Response } from "express";
import Recipient from "../models/Recipient";

class RecipientController {
  async store(req: Request, resp: Response): Promise<Response> {
    const {
      name,
      street,
      num,
      complement,
      city,
      state,
      cep
    } = await Recipient.create(req.body);

    return resp.json({
      message: "success",
      name,
      street,
      num,
      complement,
      city,
      state,
      cep
    });
  }
}

export default new RecipientController();
