var test = require('tape')
var scr  = require('./')

test('[track] modern housing', function(t) {
  scr('ded451c6d8f9ff1c62f72523f49dab68'
    , 'https://soundcloud.com/dylan_king/modern-housing'
    , function(err, data, stream_url) {
      t.ifError(err, 'retrieved without error')
      t.equal(data.kind, 'track', '.kind === "track"')
      t.equal(data.title, 'Modern Housing', '.title === "Modern Housing"')
      t.equal(typeof stream_url, 'string', 'has a stream_url')
      t.end()
    })
})

test('[set] neo-la', function(t) {
  scr('ded451c6d8f9ff1c62f72523f49dab68'
    , 'https://soundcloud.com/arcanekids/sets/neo-l-a'
    , function(err, data, stream_url) {
      t.ifError(err, 'retrieved without error')
      t.equal(data.kind, 'playlist', '.kind === "playlist"')
      t.equal(data.title, '//NEO-L.A.//', '.title === "//NEO-L.A.//"')
      t.equal(typeof stream_url, 'boolean', 'does not have a stream_url')
      t.end()
    })
})
