import LiquidSvg from "./LiquidSvg/index.vue";
const install = function (app, options = {}) {
  app.component(options.name || LiquidSvg.name, LiquidSvg);
};

export default function (app) {
  app.use(install);
}

export { LiquidSvg };
