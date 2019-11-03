import * as express from "express";
import { myMusic } from "src/myMusic";
import { others } from "others/others";
var app = express();
var _a = process.env.PORT, PORT = _a === void 0 ? 3000 : _a;
app.get("/", function (req, res) {
    res.send({
        message: "hello world" + myMusic + others
    });
});
app.listen(PORT, function () {
    console.log("server started at http://localhost:" + PORT);
});
//# sourceMappingURL=index.js.map