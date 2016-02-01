var request = require('request')

module.exports = resolve

function resolve(id, goal, callback) {
  request.get('https://api.soundcloud.com/resolve.json', {
      qs: { client_id: id, url: goal }
    , json: true
  }, function(err, res, body) {
    if (err) return callback(err)
    if (body.errors) return callback(new Error(
      body.errors[0].error_message
    ))

    var stream_url = body.kind === 'track'
      && body.stream_url + '?client_id=' + id

    return callback(null, body, stream_url)
  })
}
