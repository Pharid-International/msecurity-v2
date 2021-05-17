import { Request, Response, NextFunction } from "express";
import asysnchandeler from "express-async-handler";

const isAdmin = asysnchandeler(
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.partner != null) {
      next();
    } else {
      res.statusCode = 403;
      throw "Unauthorize Response";
    }
  }
);

export default isAdmin;
