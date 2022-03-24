const Router = require("koa-router");

const api = new Router();
const verify = require("../verify/api");
const banner = require("../ads/banner/api");

api.use("/verify", verify.routes());
api.use("/banner", banner.routes());

module.exports = api;
