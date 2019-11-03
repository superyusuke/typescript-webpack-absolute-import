import * as express from "express";
import { Request, Response } from "express";
import { myMusic } from "src/myMusic";
import { others } from "others/others";
const app = express();
const { PORT = 3000 } = process.env;
app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "hello world" + myMusic + others
  });
});
app.listen(PORT, () => {
  console.log("server started at http://localhost:" + PORT);
});
