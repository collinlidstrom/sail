const withPlugins = require("next-compose-plugins")

const reactSvg = require("next-react-svg")
const path = require("path")

const webpackConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules[\/\\](?!(swiper|dom7)[\/\\])/,
      use: [options.defaultLoaders.babel],
    })
    return config
  },
}
module.exports = withPlugins(
  [
    [
      reactSvg,
      {
        include: path.resolve(__dirname, "src/assets/svg"),
      },
    ],
  ],
  {
    images: {
      deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      // loader: "imgix", // Uncomment this line for STATIC EXPORT
      // path: "", // Uncomment this line for STATIC EXPORT
    },
    env: {
      production_type: "server", // Change variable to "static" for STATIC EXPORT
    },
    // trailingSlash: true // Uncomment this line for STATIC EXPORT
  },
  webpackConfig
)
