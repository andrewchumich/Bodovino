var React = require('react-native');
var Redux = require('redux');
var Main = require('../components/Main');
var WineDetail = require('../components/WineDetail');
var { MAIN, DETAIL } = require('../routes');
var { normalize, arrayOf } = require('normalizr');
var Schema = require('../schema');
var { initializeData } = require('../dataMapper');
var NavBar = require('react-native-navbar');
var NavStyle = require('../styles/navBar');

var {
    connect
    } = require('react-redux/native');

var {
    Component,
    Navigator,
    View,
    Text
    } = React

var {
    addWines
} = require('../actions/WineActions');


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
              renderScene={this._renderScene}
              initialRoute={{
                navigationBar: <NavBar 
                  title="Wine List"
                  style={NavStyle.navView}
                  />,
                component: Main
              }}
            />
        );
    }

    // called every time navigator.push/pop is called
    // the route is just a plain object and contains
    // parameters to help the next component render
    _renderScene(route, navigator) {
      var Component = route.component;
      var navBar = route.navigationBar;

      if (navBar) {
        navBar = React.addons.cloneWithProps(navBar, {
          navigator: navigator,
          route: route
        });
      }
      return (
        <View style={{flex: 1}}>
          {navBar}
          <Component navigator={navigator} route={route} />
        </View>
      );
    }
}

// Each time the redux state changes, all connected components
// will be notified allowing them to grab the new state slice.
// This component does not need any part of the state and only
// needs props.dispatch so we pass nothing to the first connect() call
WineApp = connect()(WineApp);
module.exports = WineApp