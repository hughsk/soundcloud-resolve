# soundcloud-resolve [![stable](http://hughsk.github.io/stability-badges/dist/stable.svg)](http://github.com/hughsk/stability-badges) #

[![soundcloud-resolve](https://nodei.co/npm/soundcloud-resolve.png?mini=true)](https://nodei.co/npm/soundcloud-resolve)

Takes a [SoundCloud](http://soundcloud.com) URL (i.e. track, playlist, artist,
etc.) and retrieves the relevant JSON data for that resource from the
SoundCloud API. Works with [node](http://nodejs.org/) and
[browserify](http://browserify.org/).

## Usage ##

### `resolve(client_id, url, callback)` ###

Takes a `client_id` and the resource's permalink `url`, calling
`callback(err, json)` when complete.
