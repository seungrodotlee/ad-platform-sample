const Koa = require("koa");
const Router = require("koa-router");
const cors = require("@koa/cors");

const router = require("./router");
const api = require("./api");

const app = new Koa();
const rootRouter = new Router();

app.use(cors());

rootRouter.use("/", router.routes());
rootRouter.use("/api", api.routes());
app.use(rootRouter.routes());
app.use(rootRouter.allowedMethods());

app.listen(3050, () => {
  console.log("server listening to port 3050");
});
