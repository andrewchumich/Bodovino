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
        var { rating, onRate, numStars, viewOnly } = this.props;
        if(numStars === undefined || numStars === null || numStars < 1) {
            numStars = 5;
        }
        var starsList = [];
        for (var i = 0; i < numStars; i++) {
            starsList.push(this._renderStar(i+1));
        };
        if(viewOnly !== true) {
            starsList.push(this._renderClear());
        }
        return (
            <View style={styles.ratingContainer}>
                {starsList}
            </View>
        )
    }

    _renderStar(value) {
        var { rating, onRate, size } = this.props;
        var starStyle = styles.thumb;
        var starImage;
        if(value <= rating.score) {
            starImage = require('image!yellow-star');
        } else {
            starImage = require('image!grey-star');
        }
        if(size !== undefined && size !== null) {
            switch(size) {
                case 'small':
                    starStyle = styles.smallImage;
                    break;
                default:    
                    starStyle = styles.thumb;
                    break;
            }
        }
        return (
                <TouchableOpacity style={styles.rating} onPress={() => this._onRate(value)}>
                    <Image source={starImage} style={starStyle}/>
                </TouchableOpacity>
            );
    }

    _renderClear() {
        var { onClear, size } = this.props;
        var starStyle = styles.thumb;
        var clearImage = require('image!no-icon');
        if (size !== undefined && size !== null) {
            switch(size) {
                case 'small':
                    starStyle = styles.smallImage;
                    break;
                default:
                    starStyle = styles.thumb;
                    break;
            }
        }
        return (
                <TouchableOpacity style={styles.rating} onPress={() => this._onRate(0)}>
                    <Image source={clearImage} style={starStyle}/>
                </TouchableOpacity>
            );        
    }

    _onRate(value) {
        var { onRate } = this.props;
        if(onRate) {
            onRate(value);
        }
    }

}

StarRating.propTypes = {
    rating: React.PropTypes.object.isRequired,
    onRate: React.PropTypes.func,
    numStars: React.PropTypes.number,
    size: React.PropTypes.string,
    viewOnly: React.PropTypes.bool
}

module.exports = StarRating