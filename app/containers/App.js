var React = require('react-native')
var Redux = require('redux')
var reducers = require('../reducers')
var WineApp = require('./WineApp')
var thunkMiddleware = require('redux-thunk')
var loggerMiddleware = require('redux-logger')
var ReduxForm = require('redux-form');

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

// we will want to remove logger middleware on release
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware, // lets us dispatch() functions
  loggerMiddleware // neat middleware that logs actions
)(createStore);

reducers = {...reducers, form: ReduxForm.reducer };
var reducer = combineReducers(reducers);
var store = createStoreWithMiddleware(reducer)

class App extends Component {
    render() {
        // the provider tag hooks up the app to listen for changes in state (store)
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