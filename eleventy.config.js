const { compressHTML } = require('./config/transforms');
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (config) {
  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);
  config.addWatchTarget('./src/_includes/css');
  config.addTransform('compressHTML', compressHTML);
  config.addPlugin(pluginSyntaxHighlight);

  config.addCollection('sortedEnglish', (collectionApi) => {
    const levels = ['get-started', 'beginner', 'intermediate', 'advanced']
    return collectionApi.getFilteredByTag('en').sort((a, b) => {
      const aLevel = a.data.level ? levels.indexOf(a.data.level) : -1;
      const bLevel = b.data.level ? levels.indexOf(b.data.level) : -1;
      return aLevel - bLevel;
    });
  });


  config.addCollection('sortedGerman', (collectionApi) => {
    const levels = ['get-started', 'beginner', 'intermediate', 'advanced']
    return collectionApi.getFilteredByTag('de').sort((a, b) => {
      const aLevel = a.data.level ? levels.indexOf(a.data.level) : -1;
      const bLevel = b.data.level ? levels.indexOf(b.data.level) : -1;
      return aLevel - bLevel;
    });
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
