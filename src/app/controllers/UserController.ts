import User from "../models/User";

class UserController {
  async store(req, resp): Promise<Response> {
    const { name, email } = await User.create(req.body);
    return resp.json({ name, email });
  }
}

export default new UserController();
