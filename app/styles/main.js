var { StyleSheet } = require('react-native');

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
    alignItems: 'center',
    backgroundColor: '#37202F',
    color: '#a29bb9',
    padding: 10,
    height: 40
  },
  searchText: {
  }
});

