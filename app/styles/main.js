var { StyleSheet } = require('react-native');

module.exports = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
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
  rowContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#b7b7b7'
  },  
  textContainer: {
    flexDirection: 'column',
    padding: 10
  }
});

