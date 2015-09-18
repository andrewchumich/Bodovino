var RNDBModel = require('react-native-db-models')

var DB = {
    "ratings": new RNDBModel.create_db('ratings'),
}

module.exports = DB