var React = require('react-native');
var Redux = require('redux');
var reduxForm = require('redux-form');
var { initialize } = require('redux-form');
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
        super(props)
    }


    render() {
        var { fields: {name} } = this.props;
        console.log('lol', name.value);
        return (
            <TextInput 
                style={styles.searchBar}
                onChangeText={(text) => this._onChange(text)}
                value={name.value}
                placeholder="search..."
                placeholderTextColor="#a29bb9"
            />
        )
    }

    _onChange(text) {
        console.log(text);
        this.props.dispatch(initialize('wineSearch', { name: text }));
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