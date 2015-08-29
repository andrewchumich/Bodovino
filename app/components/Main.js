var React = require('react-native');
var Redux = require('redux');
var { DETAIL } = require('../routes');
var styles = require('../styles/main.js');

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
        var { wines } = this.props;
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var wine_list = ds.cloneWithRows(wines.wines);
        return (
            <ListView 
                style={styles.list}
                dataSource={wine_list}
                renderRow={this._renderRow.bind(this)}
                renderSeparator={() => <View style={styles.separator} />}
            />
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
                <View>
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
                </View>
            </TouchableHighlight>
            );
    }
}

function mapStateToProps(state) {
    return {
        wines: state.wines,
        ratings: state.ratings
    };
}


// connect uses the mapStateToProps to hook up a component to 
// listen to a specific slice of the state
Main = connect(mapStateToProps)(Main);
module.exports = Main