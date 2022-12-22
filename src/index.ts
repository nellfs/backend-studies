import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import jwt, { Secret, VerifyCallback, VerifyErrors } from "jsonwebtoken";

const app: Express = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const SECRET = "leakedsecret";

app.get("/hello", (req: Request, res: Response) => {
  return res.json("Hello World!");
});

app.post("/login", (req: Request, res: Response) => {
  const { name, password }: { name: string; password: string } = req.body;
  if (name === "admin" && password === "123") {
    const token = jwt.sign({ userId: 1 }, SECRET, { expiresIn: 300 });
    return res.json({ auth: true, token });
  }

  res.status(401).end();
});

app.listen(3000);
