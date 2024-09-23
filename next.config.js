const path = require("path");

module.exports = {
  // images: {
  //   domains: ["images.ctfassets.net"],
  // },
  // webpack(config) {
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     // your aliases
  //   };
  // },
  webpack: (config) => {
    // config.resolve.alias["@images"] = path.join(
    //   __dirname,
    //   "path/to/your/images/folder",
    // );

    config.resolve.alias = {
      ...config.resolve.alias,
    };

    return config;
  },
};
