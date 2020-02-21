import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import environment from "../../config/environment";

export default async function(
  req: Request,
  resp: Response,
  next
): Promise<Response> {
  const authHeader = req.headers.authorization;

  if (!authHeader) return resp.status(401).json({ error: "Unauthorized" });

  const [, token] = authHeader.split(" ");

  try {
    const decoded: any = await jwt.verify(token, environment.security.jwtKey);

    (req as any).user = decoded.id;
    return next();
  } catch (e) {
    return resp.status(401).json({ error: "Unauthorized - Token" });
  }
}
