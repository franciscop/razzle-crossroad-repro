// razzle.config.js
const nodeExternals = require("webpack-node-externals");

module.exports = {
  modify: (config, { target, dev }) => {
    config.externals =
      target === "node"
        ? [
            nodeExternals({
              whitelist: [
                dev ? "webpack/hot/poll?300" : null,
                /\.(eot|woff|woff2|ttf|otf)$/,
                /\.(svg|png|jpg|jpeg|gif|ico)$/,
                /\.(mp4|mp3|ogg|swf|webp)$/,
                /\.(css|scss|sass|sss|less)$/,
                /^crossroad/, // <= My library name
                /^@bit\/(.*)/
              ].filter(Boolean)
            })
          ]
        : [];
    return config;
  }
};
