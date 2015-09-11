var { StyleSheet } = require('react-native');
var React = require('react-native');

var {
  PixelRatio
} = React;

module.exports = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  fullImage: {
    width: 160,
    height: 160,
    marginRight: 10
  },
  separator: {
    height: 1,
    backgroundColor: '#342830'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#fff'
  },
  description: {
    fontSize: 15,
    color: '#fff'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#b7b7b7'
  },  
  textContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10
  },
  searchBar: {
    borderStyle: 'solid',
    borderColor: '#000',
    borderRadius: 15
  },
  searchBarText: {
    alignItems: 'center',
    padding: 10,
    height: 40
  },
  searchText: {
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#CDCDCD',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
  navBar: {
    backgroundColor: '#37202F',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarButtonText: {
    color: '#a29bb9',
  },
});

