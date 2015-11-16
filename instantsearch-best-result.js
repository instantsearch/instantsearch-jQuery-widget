// we add ourselves to the instantsearch.widgets namespace
instantsearch.widgets.bestResult = function bestResult($container) {
  // this is the custom widget interface you need to implement,
  // only render OR init are mandatory, it all depends on your usecase and
  // if you need to setup some default Algolia's searchParameters
  // see more details in our documentation:
  // https://community.algolia.com/instantsearch.js/documentation/#custom-widgets
  return {
    getConfiguration: function(/*currentSearchParams*/) {
      // we only want one hit
      // This parameter is one of Algolia's REST API: https://www.algolia.com/doc/rest#pagination-parameters
      // See all the parameters here: https://www.algolia.com/doc/rest
      // or in the helper documentation: http://algolia.github.io/algoliasearch-helper-js/docs/SearchParameters.html
      return {
        hitsPerPage: 1
      }
    },
    init: function(params) {
      // params.state
      // params.helper
      //
      // Nothing to do here, only present for exhaustivity
    },
    render: function(params) {
      // params.results
      // params.state
      // params.helper

      var results = params.results;
      if (results.hits.length === 0) {
        $container.html('No results');
      } else {
        $container.html(
          'Name: ' + results.hits[0].name + '<br/>' +
          'Price: ' + results.hits[0].price + '<br/>' +
          'Image: <img src="' + results.hits[0].image + '" />');
      }
    }
  }
}
