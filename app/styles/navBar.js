var { StyleSheet } = require('react-native');
var React = require('react-native');

var {
  PixelRatio
} = React;

module.exports = StyleSheet.create({
  navView: {
    backgroundColor: '#eee',
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#CDCDCD',
  }
});

