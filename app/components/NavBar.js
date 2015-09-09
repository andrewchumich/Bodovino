var React = require('react-native');
var styles = require('../styles/main.js');

var {
    Component,
    View,
    ListView,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    TextInput,
    Navigator
    } = React


class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.navBar}>
                <TouchableOpacity style={styles.navBarLeftButton} onPress={() => this._onBack()}>
                    <Text style={[styles.navBarText, styles.navBarButtonText]}>Back</Text>
                </TouchableOpacity>
            </View>
        )
    }

    _onBack() {
        this.props.navigator.pop();
    }

}

NavBar.propTypes = {
    navigator: React.PropTypes.object.isRequired
}

module.exports = NavBar;