var React = require('react-native');
var Redux = require('redux');
var { setRating } = require('../actions/RatingActions');
var { normalize, arrayOf } = require('normalizr');
var Schema = require('../schema');
var styles = require('../styles/wineDetail');

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
    Image
    } = React


class Main extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        var { wine, rating } = this.props;
        if(rating === undefined) {
            rating = { score: undefined }
        }
        if(wine.color === 'red') {
            colorSource = require('image!bodovino-red');
        } else {
            colorSource = require('image!bodovino-white');
        }
        return (
            <View style={styles.detail}>
                <Text style={styles.title}>{ wine.name }</Text>
                <View style={styles.infoBox}>
                    <Image 
                        style={styles.fullImage}
                        source={{uri: wine.image}}
                    />
                    <View style={styles.detailsList}>
                        <Text style={styles.wineProperties}>{ wine.origin }</Text>
                        <View style={styles.wineProperties}>
                            <Image source={colorSource} style={styles.thumb}/>
                            <Text >{ wine.variety }</Text>
                        </View>
                        <Text style={styles.wineProperties}>{ wine.description }</Text>
                    </View>
                </View>
                <View styles={styles.description}>
                    <Text style={styles.wineProperties}>{ wine.description }</Text>
                </View>
                <View style={styles.separator} />
                <TouchableOpacity onPress={() => this._rateWine(wine)}>
                    <Text>RATE - {rating.score}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    _rateWine(wine) {
        var rating = {
            id: wine.id,
            score: 4,
            checked: true
        }
        var normalized_rating = normalize(rating, Schema.wine);
        this.props.dispatch(setRating(normalized_rating));
    }
}

function mapStateToProps(state, props) {
    return {
        rating: state.ratings[props.wine.id]
    };
}

// connect uses the mapStateToProps to hook up a component to 
// listen to a specific slice of the state
Main = connect(mapStateToProps)(Main);
module.exports = Main