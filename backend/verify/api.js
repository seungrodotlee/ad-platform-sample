const Router = require("koa-router");
const { verifyId } = require("./data");

const banner = new Router();

banner.get("/:id", async (ctx, next) => {
  const { id } = ctx.params;
  const reg = /^[0-9]{6}$/;

  if (!reg.test(id)) {
    ctx.body = {
      result: false,
      msg: `Invalid ID: ${id}! id: six-digits number (ex. 123456)`,
    };
    return;
  }

  const verifyResult = await verifyId(id);

  ctx.body = {
    result: true,
    data: { verified: verifyResult },
  };
});

module.exports = banner;
