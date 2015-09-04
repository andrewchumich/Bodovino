var { StyleSheet } = require('react-native');

module.exports = StyleSheet.create({
  thumb: {
    width: 40,
    height: 40,
    marginRight: 15
  },
  fullImage: {
    width: 160,
    height: 160,
    marginRight: 10,
    borderRadius: 10
  },
  separator: {
    height: 1,
    backgroundColor: '#342830'
  },
  title: {
    fontSize: 25,
    color: '#fff',
    paddingBottom: 10
  },
  detailsList: {
    flex: 1
  },
  textContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10
  },
  detail: {
    flex: 1,
    padding: 10,
    marginTop: 22,
    backgroundColor: '#b7b7b7'    
  },
  infoBox: {
    flexDirection: 'row',
    paddingBottom: 10
  },
  wineProperties: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

