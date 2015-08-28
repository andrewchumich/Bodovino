var React = require('react-native');
var Redux = require('redux');
var Main = require('../components/Main');
var WineDetail = require('../components/WineDetail');
var { MAIN, DETAIL } = require('../routes');
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

var mock_wines = [
  {
    id: 'a0',
    name: 'barnyard wine',
    variety: 'merlot',
    origin: 'Napa, CA',
    description: 'so much flavor',
    image: 'http://example.com/images/barnyard.jpg'
  },
  {
    id: 'b1',
    name: 'Two Buck Chuck',
    variety: 'Cabernet Sauvignon',
    origin: 'Boise, ID',
    description: 'very cheap!',
    image: 'http://example.com/images/chuck.jpg'
  },
  {
    id: 'c2',
    name: 'Franzia',
    variety: 'merlot',
    origin: 'Napa, CA',
    description: 'comes in a bag',
    image: 'http://example.com/images/franzia.jpg'
  }

];


class WineApp extends Component {
    constructor(props) {
        super(props)
    }
    // here is where we will load the data from the server and set the initial state
    componentWillMount () {
      this.props.dispatch(addWines({wines: mock_wines}));
    }

    render() {
        return (
          <Navigator
            initialRoute={{ id: MAIN }}
            renderScene={this._renderScene}
          />
        );
    }

    _renderScene(route, navigator) {
        switch(route.id) {
          case MAIN:
            return (
                <Main navigator={navigator}/>
              )
          case DETAIL:
            return (
              <WineDetail navigator={navigator} wine={route.wine} />
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


WineApp = connect((state) => state)(WineApp);
module.exports = WineApp