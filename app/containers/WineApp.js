var React = require('react-native');
var Redux = require('redux');
var Main = require('../components/Main');
var WineDetail = require('../components/WineDetail');
var { MAIN, DETAIL } = require('../routes');
var { normalize, arrayOf } = require('normalizr');
var Schema = require('../schema');
var { initializeData } = require('../dataMapper');

var {
    connect
    } = require('react-redux/native');

var {
    Component,
    Navigator
    } = React

var {
    addWines
} = require('../actions/WineActions');

// var mock_wines = [
//   {
//     id: 'a0',
//     name: 'barnyard wine',
//     variety: 'merlot',
//     origin: 'Napa, CA',
//     description: 'so much flavor',
//     image: 'http://example.com/images/barnyard.jpg'
//   },
//   {
//     id: 'b1',
//     name: 'Two Buck Chuck',
//     variety: 'Cabernet Sauvignon',
//     origin: 'Boise, ID',
//     description: 'very cheap!',
//     image: 'http://example.com/images/chuck.jpg'
//   },
//   {
//     id: 'c2',
//     name: 'Franzia',
//     variety: 'merlot',
//     origin: 'Napa, CA',
//     description: 'comes in a bag',
//     image: 'http://example.com/images/franzia.jpg'
//   }

// ];


class WineApp extends Component {
    constructor(props) {
        super(props)
    }
    // here is where we will load the data from the server and set the initial state
    // we will want to load from local storage first and then merge the server data
    // so that ratings can be saved
    componentWillMount () {
      initializeData().then((wines) => {
        this.props.dispatch(addWines(wines));
      });
    }

    render() {
        return (
          <Navigator
            initialRoute={{ id: MAIN }}
            renderScene={this._renderScene}
          />
        );
    }

    // called every time navigator.push/pop is called
    // the route is just a plain object and contains
    // parameters to help the next component render
    _renderScene(route, navigator) {
        switch(route.id) {
          case MAIN:
            return (
                <Main 
                  navigator={navigator}
                />
              )
          case DETAIL:
            return (
              <WineDetail 
                navigator={navigator}
                wineID={route.wineID} 
              />
            )
          default: 
            return (
                <Main
                  navigator={navigator}
                />
              )
          }
    }
}

// Each time the redux state changes, all connected components
// will be notified allowing them to grab the new state slice.
// This component does not need any part of the state and only
// needs props.dispatch so we pass nothing to the first connect() call
WineApp = connect()(WineApp);
module.exports = WineApp