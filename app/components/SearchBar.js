var React = require('react-native');
var Redux = require('redux');
var reduxForm = require('redux-form');
var { change } = require('redux-form');
var styles = require('../styles/main.js');

var {
    connect
    } = require('react-redux/native')

var {
    Component,
    View,
    ListView,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    TextInput
    } = React


class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var { fields: {name} } = this.props;
        return (
            <View>
                <TextInput 
                    style={styles.searchBar}
                    onChangeText={(text) => this._onChange(text)}
                    placeholder="search..."
                    placeholderTextColor="#a29bb9"
                />
            </View>
        )
    }

    _onChange(text) {
        this.props.dispatch(change('wineSearch', 'name', text));
    }

    _onBlur(event) { 
        console.log('blur', event.nativeEvent.text);
    }
}

function mapStateToProps(state, ownProps) {
  // this is React Redux API: https://github.com/rackt/react-redux
  // for example, you may use ownProps here to refer to the props passed from parent.
  return {
    form: state.form
  };
}

SearchBar = reduxForm.default({
  form: 'wineSearch',
  fields: ['name']
})(SearchBar);

SearchBar = connect(mapStateToProps)(SearchBar);
module.exports = SearchBar;