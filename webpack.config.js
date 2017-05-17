var config = require('./config');
var webpack = require('webpack');
var path = require('path');
var glob = require('glob');

var srcPath = path.resolve(__dirname, 'src/js/');
var destPath = path.resolve(__dirname, 'public/js/');

//複数のファイルをエントリーに入れる
const entries = {};
const targets = glob.sync(`${srcPath}**/*.js`);
targets.forEach(value => {
  const re = new RegExp(`${srcPath}`);
  const key = value.replace(re, '');
  if(key.charAt(1) !== '_'){
    entries[key] = value;
  };
});

module.exports = {
  entry: entries,
  output: {
    filename: '[name]',
    path: destPath
  }
};