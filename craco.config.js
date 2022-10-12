const CracoAntDesignPlugin = require("craco-antd");
module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          "@primary-color": "rgba(142,214,251,1) ",
          "@border-radius-base": "3px",
        },
      },
    },
  ],
};