var React = require('react-native')
var Redux = require('redux')

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


class Main extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        var { wine } = this.props;
        console.log(wine);
        return (
            <View style={{flexDirection: 'row', height: 200, padding: 20}}>
                <Text>{ wine.name } - { wine.origin }</Text>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
    };
}

// connect uses the mapStateToProps to hook up a component to 
// listen to a specific slice of the state
Main = connect(mapStateToProps)(Main);
module.exports = Main