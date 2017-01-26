const { list: cb_getLatest } = require('ghreleases')

const getLatest = (auth, org, repo, options) => {
  return new Promise(function(resolve, reject) {
    const callback = (err, release) => {
      if (err) reject(err)
      else resolve(release)
    }
    cb_getLatest(auth, org, repo, options || {}, callback)
  })
}

module.exports = {
  getLatest
}
