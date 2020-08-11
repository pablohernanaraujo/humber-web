const path = require('path');
const styleguide = require('./config/sections');
const customWebpack = require('./config/webpack');
// See: https://github.com/styleguidist/react-docgen-typescript#parseroptions
const parserOptions = {};

const sections = styleguide();
const webpackConfig = customWebpack();

module.exports = {
  ignore: [
    '**/__test__/*.{ts,tsx}',
  ],
  pagePerSection: true,
  sections,
  webpackConfig,
  propsParser: require('react-docgen-typescript').withCustomConfig(
    path.join(__dirname, '../tsconfig.json'),
    [parserOptions],
  ).parse,
};