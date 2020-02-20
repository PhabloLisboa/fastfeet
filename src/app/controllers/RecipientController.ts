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

  async update(req: Request, resp: Response): Promise<Response> {
    const recipient = await Recipient.findByPk(req.params.id);

    const {
      name,
      street,
      num,
      complement,
      city,
      state,
      cep
    } = await recipient.update(req.body);
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

  async get(req: Request, resp: Response): Promise<Response> {
    const recipientList = await Recipient.findAll();
    return resp.json(recipientList);
  }

  async show(req: Request, resp: Response): Promise<Response> {
    const recipient = await Recipient.findByPk(req.params.id);

    if (recipient) {
      const { name, street, num, complement, city, state, cep } = recipient;
      return resp.json({
        name,
        street,
        num,
        complement,
        city,
        state,
        cep
      });
    }

    return resp.status(404).send({ error: "Recipient not found" });
  }

  async delete(req: Request, resp: Response): Promise<Response> {
    const recipient = await Recipient.findByPk(req.params.id);

    if (recipient) {
      const { name } = recipient;
      recipient.destroy();
      return resp.json({ message: `Recipient ${name} was deleted` });
    }

    return resp.status(404).send({ error: "Recipient not found" });
  }
}

export default new RecipientController();
