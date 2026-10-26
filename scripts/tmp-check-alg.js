const algoliasearch = require('algoliasearch')
const client = algoliasearch('FIT1DSVMGU', '5d63383ce8041b506f6ae2606a01a587')
client
  .initIndex('prod_thexuzhou')
  .search('投资', { hitsPerPage: 3 })
  .then(res => {
    console.log('nbHits=', res.nbHits)
    console.log('first title=', res.hits[0] && res.hits[0].title)
    console.log('first slug=', res.hits[0] && res.hits[0].slug)
  })
  .catch(e => console.log('ALGOLIA ERR:', e.message))
