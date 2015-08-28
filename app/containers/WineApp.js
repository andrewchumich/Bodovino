var React = require('react-native')
var Redux = require('redux')
var Main = require('../components/Main')
var routes = require('../routes');
var {
    connect
    } = require('react-redux/native')

var {
    Component,
    Navigator
    } = React


class WineApp extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount () {
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