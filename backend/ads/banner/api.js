const Router = require("koa-router");

const banner = new Router();

banner.get("/inpage/:size", (ctx, next) => {
  const { size } = ctx.params;
  const reg = /^[0-9]+x[0-9]+$/;

  if (!reg.test(size)) {
    ctx.body = {
      result: false,
      msg: `Invalid size for banner: ${size}! size: WIDTH_INTxHEIGHT_INT (ex. 970x90)`,
    };
    return;
  }

  // const [w, h] = size.split("x").map((s) => parseInt(s));

  ctx.body = {
    result: true,
    data: `
      <div style="display: flex; justify-content: center; align-items: center;">
        <iframe src="localhost:3050/banner/inpage/${size}" />
      </div>
      
    `,
  };
});

module.exports = banner;
