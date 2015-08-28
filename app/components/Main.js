var React = require('react-native')
var Redux = require('redux')

var {
    connect
    } = require('react-redux/native')

var window = require('../util/window')
var { width, height } = window.get()


var {
    Component,
    View,
    ListView,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight
    } = React


class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{flexDirection: 'row', height: 200, padding: 20}}>
                <Text>HELLOO</Text>
            </View>
        )
    }

    _renderRow(rowData, sectionID, rowID) {
        var score = rowData.score;
        var user = rowData.user;
        return (
            <View>
                <TouchableOpacity onPress={() => this._sortBy()}>
                    <Text>
                        {score} - {user}
                    </Text>
                </TouchableOpacity>
            </View>
            );
    }
}

function mapStateToProps(state) {
    return state;
}

Main = connect(mapStateToProps)(Main);
module.exports = Main