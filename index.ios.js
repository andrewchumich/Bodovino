/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var App = require('./app/containers/App');

var {
  AppRegistry,
} = React;

var Bodovino = React.createClass({
  render: function() {
    return (
      <App />
    );
  }
});

AppRegistry.registerComponent('Bodovino', () => Bodovino);
