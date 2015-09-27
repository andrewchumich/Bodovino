var React = require('react-native');
var Redux = require('redux');
var { editWine } = require('../actions/WineActions');
var { normalize, arrayOf } = require('normalizr');
var Schema = require('../schema');
var styles = require('../styles/wineDetail');
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
    TouchableOpacity,
    TouchableHighlight,
    Image,
    PixelRatio
    } = React


class Main extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        var { wine } = this.props;
        if(wine.rating === undefined) {
            wine.rating = { score: undefined }
        }
        if(wine.color === 'red') {
            colorSource = require('image!bodovino-red');
        } else {
            colorSource = require('image!bodovino-white');
        }
        return (
            <View style={styles.main}>
                <ScrollView style={styles.detail}>
                    <Text style={styles.title}>{ wine.name }</Text>
                    <View style={styles.infoBox}>
                        <Image 
                            style={styles.fullImage}
                            source={{uri: wine.image}}
                            resizeMode='contain'
                            backgroundColor='#ffffff'
                        />
                        <View style={styles.detailsList}>
                            <Text style={styles.wineProperties}>{ wine.origin }</Text>
                            <View style={styles.wineProperties}>
                                <Image source={colorSource} style={styles.thumb}/>
                                <Text >{ wine.variety }</Text>
                            </View>
                        </View>
                    </View>
                    <View styles={styles.description}>
                        <Text style={styles.wineProperties}>{ wine.description }</Text>
                    </View>
                    <View style={styles.separator} />
                    <StarRating rating={wine.rating} onRate={this._rateWine.bind(this)} />
                </ScrollView>
            </View>
        )
    }

    _rateWine(score) {
        var { wine } = this.props;
        wine.rating = {
            ...wine.rating,
            id: wine.id,
            score: score
        }
        this.props.dispatch(editWine(wine));
    }
}


Main.propTypes = {
    wineID: React.PropTypes.number.isRequired
}

function mapStateToProps(state, props) {
    return {
        wine: state.wines.wines[props.wineID]
    };
}

// connect uses the mapStateToProps to hook up a component to 
// listen to a specific slice of the state
Main = connect(mapStateToProps)(Main);
module.exports = Main