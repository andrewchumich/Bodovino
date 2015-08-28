var React = require('react-native')
var Redux = require('redux')
var reducers = require('../reducers')
var WineApp = require('./WineApp')
var thunkMiddleware = require('redux-thunk')
var loggerMiddleware = require('redux-logger')

var {
    Provider
    } = require('react-redux/native')


var {
    createStore,
    combineReducers,
    applyMiddleware
    } = Redux


var {
    Component,
    View
    } = React


const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware, // lets us dispatch() functions
  loggerMiddleware // neat middleware that logs actions
)(createStore);

console.log(reducers);
var reducer = combineReducers(reducers);
var store = createStoreWithMiddleware(reducer)

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                {function () {
                    return <WineApp />
                }}
            </Provider>
        )
    }
}


module.exports = App