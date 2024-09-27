'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
    postcssOptions: {
      compile: {
        plugins: [require('tailwindcss')('tailwind.config.js')],
        enabled: true,
        includePaths: ['app'],
        cacheInclude: [/.*\.(css|js|hbs|html)$/, /.\/tailwind\.config\.js/],
      },
    },
    fontawesome: {
      icons: {
        'free-solid-svg-icons': 'all',
        'free-regular-svg-icons': 'all',
      },
    },
  });

  const { Webpack } = require('@embroider/webpack');
  return require('@embroider/compat').compatBuild(app, Webpack, {
    staticAddonTestSupportTrees: true,
    staticAddonTrees: true,
    staticHelpers: true,
    staticModifiers: true,
    staticComponents: true,
    staticEmberSource: true,
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
  });
};
