var React = require('react-native');
var Redux = require('redux');
var { DETAIL } = require('../routes');
var styles = require('../styles/main.js');
var SearchBar = require('./SearchBar');

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
        if(form.wineSearch && form.wineSearch.name && form.wineSearch.name.value !== '') {
            var regex = new RegExp(form.wineSearch.name.value.trim(), 'i');
            for(wine in wines.wines) {
                if(wines.wines[wine].name.search(regex) > -1) {
                    filtered_wines = {...filtered_wines };
                    filtered_wines[wine] = wines.wines[wine]
                }
            }
            if(Object.keys(filtered_wines).length === 0)  {
                filtered_wines = {0: undefined }
            }
        } else {
            filtered_wines = {...wines.wines};
        }
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var wine_list = ds.cloneWithRows(filtered_wines);
        return (
            <View style={{flex: 1}}>
                <ListView
                    dataSource={wine_list}
                    renderRow={this._renderRow.bind(this)}
                    renderSeparator={() => <View style={styles.separator} />}
                    renderSectionHeader={() => <SearchBar />}
                />
            </View>
        )
    }

    _detailView(wine) {
        // we will also want to pass user data for the wine
        this.props.navigator.push({
            id: DETAIL,
            wine
        })
    }

    _renderRow(rowData, sectionID, rowID) {
        if(rowData === undefined) {
            return <View></View>;
        }
        var { name, variety, origin, id } = rowData; 
        var rating = this.props.ratings[id];
        var checkedStatus, colorSource;
        if(rating !== undefined && rating.checked === true) {
            checkedStatus = <Text>Drank</Text>;
        }
        if(rowData.color === 'red') {
            colorSource = require('image!bodovino-red');
        } else {
            colorSource = require('image!bodovino-white');
        }
        return (
            <TouchableHighlight onPress={() => this._detailView(rowData)}>
                <View style={styles.rowContainer}>
                    <Image source={colorSource} style={styles.thumb}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.title} numberOfLines={1}>
                            {name}
                        </Text>
                        <Text style={styles.description} numberOfLines={1}>
                            {origin}
                        </Text>
                        {checkedStatus}
                    </View>
                </View>
            </TouchableHighlight>
            );
    }
}

function mapStateToProps(state) {
    return {
        wines: state.wines,
        ratings: state.ratings,
        form: state.form
    };
}


// connect uses the mapStateToProps to hook up a component to 
// listen to a specific slice of the state
Main = connect(mapStateToProps)(Main);
module.exports = Main