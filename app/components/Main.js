var React = require('react-native');
var Redux = require('redux');
var { DETAIL } = require('../routes');
var styles = require('../styles/main.js');
var SearchBar = require('./SearchBar');
var StarRating = require('./StarRating');

var {
    connect
    } = require('react-redux/native')

var {
    Component,
    View,
    ScrollView,
    ListView,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Image
    } = React


class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        var { wines, form } = this.props;
        var filtered_wines = {};
        // If there is a filter from wineSearch, use it to filter the wines list
        // else, use the entire list
        if(form.wineSearch && form.wineSearch.name && form.wineSearch.name.value !== '') {
            var regex = new RegExp(form.wineSearch.name.value.trim(), 'i');
            for(wine in wines.wines) {
                if(wines.wines[wine].name.search(regex) > -1) {
                    filtered_wines = {...filtered_wines };
                    filtered_wines[wine] = wines.wines[wine]
                }
            }
            // ListView will remove the entire component (with its header) if 
            // there are no items in the list. We need to add an undefined item
            // in filtered_wines so it will still render the filter header
            // SEE: _renderRow
            if(Object.keys(filtered_wines).length === 0)  {
                filtered_wines = {0: undefined }
            }
        } else {
            filtered_wines = {...wines.wines};
        }
        // as long as we always return new objects from our reducers (using Immutable.js would ensure this)
        // we only need to check reference equality to determine if a row needs re-rendered
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var wine_list = ds.cloneWithRows(filtered_wines);
        return (
            <View style={{flex: 1}}>
                <ListView
                    dataSource={wine_list}
                    // if we want access to props (or anything specific to the current Main class object)
                    // we need to bind `this` to the _renderRow function
                    renderRow={this._renderRow.bind(this)}
                    renderSeparator={() => <View style={styles.separator} />}
                    renderSectionHeader={() => <SearchBar />}
                />
            </View>
        )
    }

    _detailView(wineID) {
        // we will also want to pass user data for the wine
        this.props.navigator.push({
            id: DETAIL,
            wineID
        })
    }

    _renderRow(rowData, sectionID, rowID) {
        // rowData should only be undefined when the filter returns an empty list
        if(rowData === undefined) {
            return <View></View>;
        }
        var { name, variety, origin, id, rating } = rowData; 
        var checkedStatus, colorSource;
        var ratingChild;
        // ratings of 0 or undefined should be treated as 'unrated'
        if(rating !== undefined && rating.score !== undefined && rating.score !== 0) {
            ratingChild = <StarRating rating={rating} viewOnly={true} size="small"/>
        }
        // React Native does not allow you to use a variable for the require statement
        if(rowData.color === 'red') {
            colorSource = require('image!bodovino-red');
        } else {
            colorSource = require('image!bodovino-white');
        }
        return (
            <TouchableHighlight onPress={() => this._detailView(id)}>
                <View style={styles.rowContainer}>
                    <Image source={colorSource} style={styles.thumb}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.title} numberOfLines={1}>
                            {name}
                        </Text>
                        <Text style={styles.description} numberOfLines={1}>
                            {origin}
                        </Text>
                        {ratingChild}
                    </View>
                </View>
            </TouchableHighlight>
            );
    }
}

function mapStateToProps(state) {
    return {
        wines: state.wines,
        form: state.form
    };
}


// connect uses the mapStateToProps to hook up a component to 
// listen to a specific slice of the state
Main = connect(mapStateToProps)(Main);
module.exports = Main