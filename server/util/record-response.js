const R = require('ramda');

function createRecordResponse(record, musics) {
  return {
    ...R.pick(['id', 'artist', 'imageUrl', 'name'], record),
    musics: musics.map(music => R.pick(['id', 'name'], music))
  };
}

module.exports = createRecordResponse;
