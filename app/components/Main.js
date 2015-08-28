var React = require('react-native');
var Redux = require('redux');
var { DETAIL } = require('../routes');


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
        var { wines } = this.props;
        console.log(wines);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var wine_list = ds.cloneWithRows(wines.wines);
        return (
            <View style={{flexDirection: 'row', height: 200, padding: 20}}>
                <Text>Wines</Text>
                <ListView 
                    dataSource={wine_list}
                    renderRow={this._renderRow.bind(this)}
                />
            </View>
        )
    }

    _detailView(wine) {
        // go to detail view of _id
        console.log('go to detail view of', wine);
        // we will also want to pass user data for the wine
        this.props.navigator.push({
            id: DETAIL,
            wine
        })
    }

    _renderRow(rowData, sectionID, rowID) {
        var name = rowData.name;
        var variety = rowData.variety;
        var _id = rowData._id;
        return (
            <View>
                <TouchableOpacity onPress={() => this._detailView(rowData)}>
                    <Text>
                        {name} - {variety}
                    </Text>
                </TouchableOpacity>
            </View>
            );
    }
}

function mapStateToProps(state) {
    return {
        wines: state.wines
    };
}

// connect uses the mapStateToProps to hook up a component to 
// listen to a specific slice of the state
Main = connect(mapStateToProps)(Main);
module.exports = Main