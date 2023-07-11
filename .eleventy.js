const inspect = require("util").inspect;

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/img");

    eleventyConfig.addFilter("debug", (content) => `<pre>${inspect(content)}</pre>`);

    return {
        dir: {
            input: "src",
            output: "docs"
        }
    }
}