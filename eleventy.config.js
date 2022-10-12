const CleanCSS = require("clean-css");
const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPlugin(pluginWebc, {
    components: "./src/_includes/components/**/*.webc",
  });

  // Minify CSS
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  return {
    htmlTemplateEngine: "webc",
    dir: {
      input: "src",
      output: "_site",
      data: "_data",
      includes: "_includes"
    }
  };
};
