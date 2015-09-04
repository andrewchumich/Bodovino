var React = require('react-native');
var Redux = require('redux');
var { setRating } = require('../actions/RatingActions');
var styles = require('../styles/starRating');

var {
    Component,
    View,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    Image
    } = React


class StarRating extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        var { rating, onRate, numStars } = this.props;
        if(numStars === undefined || numStars === null || numStars < 1) {
            numStars = 5;
        }
        var stars_list = [];
        for (var i = 0; i < numStars; i++) {
            stars_list.push(this._renderStar(i+1));
        };
        return (
            <View style={styles.ratingContainer}>
                {stars_list}
            </View>
        )
    }

    _renderStar(value) {
        var { rating, onRate} = this.props;
        var style = {};
        var star_image;
        if(value <= rating.score) {
            style = styles.selected;
            star_image = require('image!yellow-star');
        } else {
            star_image = require('image!grey-star');
        }
        return (
                <TouchableOpacity style={styles.rating} onPress={() => onRate(value)}>
                    <Image source={star_image} style={styles.thumb}/>
                </TouchableOpacity>
            );
    }

}

StarRating.propTypes = {
    rating: React.PropTypes.object.isRequired,
    onRate: React.PropTypes.func,
    numStars: React.PropTypes.number
}

module.exports = StarRating