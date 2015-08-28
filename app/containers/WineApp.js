var React = require('react-native');
var Redux = require('redux');
var Main = require('../components/Main');
var routes = require('../routes');
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
            initialRouteStack={routes}
            renderScene={(route, navigator) => {
              switch(route.index) {
                case 0:
                  return (
                      <Main navigator={navigator}/>
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
          />
        );
    }
}


WineApp = connect((state) => state)(WineApp);
module.exports = WineApp