const { defineConfig } = require('@vue/cli-service');
//set VUE_APP_ prefix to Contentstack environment variables
(function () {
  process.env.VUE_APP_CONTENTSTACK_API_KEY = process.env.CONTENTSTACK_API_KEY;
  process.env.VUE_APP_CONTENTSTACK_API_HOST = process.env.CONTENTSTACK_API_HOST;
  process.env.VUE_APP_CONTENTSTACK_DELIVERY_TOKEN =
    process.env.CONTENTSTACK_DELIVERY_TOKEN;
  process.env.VUE_APP_CONTENTSTACK_ENVIRONMENT =
    process.env.CONTENTSTACK_ENVIRONMENT;
  process.env.VUE_APP_CONTENTSTACK_CDN = process.env.CONTENTSTACK_CDN;
})();

module.exports = defineConfig({
  transpileDependencies: true,
});
