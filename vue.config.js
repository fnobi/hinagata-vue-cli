const { BASE_PATH } = require("./src/constants.json");

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
