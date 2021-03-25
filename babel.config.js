const { extendDefaultPlugins } = require("svgo");

module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "styled-components",
      {
        ssr: true,
        displayName: true,
        preprocess: false,
        filename: false,
      },
    ],
    [
      "inline-react-svg",
      {
        svgo: {
          plugins: extendDefaultPlugins([
            {
              name: "removeViewBox",
              active: false,
            },
          ]),
        },
      },
    ],
  ],
};
