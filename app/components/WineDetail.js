var React = require('react-native');
var Redux = require('redux');
var { setRating } = require('../actions/RatingActions');
var { normalize, arrayOf } = require('normalizr');
var Schema = require('../schema');

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
        return (
            <View style={{flexDirection: 'column', height: 100, padding: 20}}>
                <Image 
                    style={{width: 50, height: 75, resizeMode: 'contain'}}
                    source={{uri: wine.image}}
                />
                <Text>{ wine.name } - { wine.origin }</Text>
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