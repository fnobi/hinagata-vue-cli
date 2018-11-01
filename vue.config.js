const { BASE_PATH, HOST_NAME, META } = require("./src/constants.json");

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
            return args.map(opts => {
                const original = opts.templateParameters;
                opts.templateParameters = function(opts) {
                    return Object.assign({}, original(opts), {
                        HOST_NAME,
                        META
                    });
                };
                return opts;
            });
        });
    }
};
