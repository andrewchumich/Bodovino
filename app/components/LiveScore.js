var React = require('react-native')
var Redux = require('redux')
var PinballActions = require('../actions/PinballActions')
var ReduxForm = require('redux-form')
var routes = require('../routes')

var {
    connect
    } = require('react-redux/native')

var {
    Component,
    View,
    ListView,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight
    } = React


class LiveScore extends Component {
    constructor(props) {
        super(props)
    }

    _gotoList() {
        this.props.navigator.push(routes[0]);
    }

    render() {
        var { score, user } = this.props.liveScore.data;
        return (
            <View style={{flexDirection: 'row', height: 200, padding: 20}}>
                <Text>{score}</Text>
                <TouchableOpacity
                    onPress={this._gotoList.bind(this)}>
                    <Text>View Scores</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function scoreValidator(data) {
  const errors = {};

  return errors;
}
// ------- HERE'S THE IMPORTANT BIT -------
function mapStateToProps(state) {
    return { liveScore: state.liveScore };
}

// apply connect() to bind it to Redux state
// apparently requirejs doesnt like to support the exports['default'] 
// https://github.com/jrburke/requirejs/issues/923

LiveScore = ReduxForm.default('liveScore', ['score', 'user'], scoreValidator)(LiveScore);
LiveScore = connect(mapStateToProps)(LiveScore);
module.exports = LiveScore