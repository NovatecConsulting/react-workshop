// const { compressHTML } = require('./config/transforms');
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const { sortByLevel, sortByOrder, sortCombine } = require('./config/collection-sort');

module.exports = function (config) {
  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);
  config.addPassthroughCopy('./src/favicon');
  config.addWatchTarget('./src/_includes/css');
  // TODO: try to figure out why that fails?
  // config.addTransform('compressHTML', compressHTML);
  config.addPlugin(pluginSyntaxHighlight);

  config.addCollection('sortedEnglish', (collectionApi) => {
    return collectionApi.getFilteredByTag('en').sort(sortCombine(sortByLevel, sortByOrder));
  });

  config.addCollection('sortedGerman', (collectionApi) => {
    return collectionApi.getFilteredByTag('de').sort(sortCombine(sortByLevel, sortByOrder));
  });

  // Return your Object options:
  return {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
