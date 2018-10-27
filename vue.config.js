const BASE_PATH = "/";

module.exports = {
  baseUrl: BASE_PATH,
  outputDir: `./dist${BASE_PATH}`,
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/assets/scss/common.scss";'
      }
    }
  }
};
