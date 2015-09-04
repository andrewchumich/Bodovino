var { StyleSheet } = require('react-native');

module.exports = StyleSheet.create({
  selected: {
    fontSize: 50
  },
  ratingContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  rating: {
  },
  thumb: {
    width: 30,
    height: 30,
    marginRight: 5
  },
  smallImage: {
    width: 15,
    height: 15
  }
});