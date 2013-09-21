var request = require('request')

module.exports = resolve

function resolve(id, goal, callback) {
  request.get('http://api.soundcloud.com/resolve.json', {
      qs: { client_id: id, url: goal }
    , json: true
  }, function(err, res, body) {
    if (err) return callback(err)
    if (body.errors) return callback(new Error(
      body.errors[0].error_message
    ))
    return callback(null, body)
  })
}

resolve(
    'ded451c6d8f9ff1c62f72523f49dab68'
  , 'https://soundcloud.com/arcanekids/sets/neo-l-a'
  , function(err, data) {
    console.log(err || data)
  }
)
