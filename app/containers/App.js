var React = require('react-native')
var Redux = require('redux')
var reducers = require('../reducers')
var WineApp = require('./WineApp')
var thunkMiddleware = require('redux-thunk')
var loggerMiddleware = require('redux-logger')
var ReduxForm = require('redux-form');
var { TOGGLE_FILTER } = require('../constants/ActionTypes');

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

// we will want to remove logger middleware on releases
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware, // lets us dispatch() functions instead of just objects which is crucial for async actions
  loggerMiddleware // neat middleware that logs actions
)(createStore);

reducers = { 
        ...reducers,
        form: ReduxForm.reducer.plugin({
            wineSearch: (state, action) => {
                switch(action.type) {
                    case TOGGLE_FILTER:
                        var newState = {...state};
                        if(state[action.value]) {
                            newState[action.value].value = (state[action.value].value === undefined) ? 0 : undefined;;
                        } else {
                            newState[action.value] = {
                                value: 0
                            };
                        }
                        return newState;
                    default:
                        return state;
                }
            }
        }) 
    };
var reducer = combineReducers(reducers);
var store = createStoreWithMiddleware(reducer)

class App extends Component {
    render() {
        // the provider tag hooks up the app to listen for changes in state (store)
        // this is from Redux
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