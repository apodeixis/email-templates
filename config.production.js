module.exports = {
  build: {
    templates: {
      destination: {
        path: 'build_production',
      },
    },
  },
  inlineCSS: true,
  removeUnusedCSS: true,
  shorthandCSS: true,
  prettify: true,
}
