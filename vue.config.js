const path = require("path");
const { BASE_PATH, HOST_NAME, META } = require("./src/constants.json");

const TEMPLATE_PARAMS = {
    HOST_NAME,
    META,
    BASE_PATH,
    BASE_URL: path.join(HOST_NAME, BASE_PATH)
};

module.exports = {
    baseUrl: BASE_PATH,
    outputDir: `./dist${BASE_PATH}`,
    css: {
        loaderOptions: {
            sass: {
                data: '@import "@/assets/scss/common.scss";'
            }
        }
    },
    chainWebpack: config => {
        config.plugin("html").tap(args => {
            return args.map(arg => {
                return Object.assign({}, arg, {
                    templateParameters(params) {
                        return Object.assign(
                            {},
                            arg.templateParameters(params),
                            TEMPLATE_PARAMS
                        );
                    }
                });
            });
        });
    }
};
