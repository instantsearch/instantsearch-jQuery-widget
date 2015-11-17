// instantsearch.js custom widget with jQuery
// First, we add ourselves to the instantsearch.widgets namespace
instantsearch.widgets.bestResult = function bestResult($container) {
  // See more details in our documentation:
  // https://community.algolia.com/instantsearch.js/documentation/#custom-widgets
  //
  // You can use any jQuery plugin you want.
  //
  // This is the custom widget interface (just an object). You need to implement
  // at least render OR init.
  return {
    getConfiguration: function(/*currentSearchParams*/) {
      // Here we only want one hit in the results, so we configure `hitsPerPage`.
      //
      // This parameter is one of Algolia's REST API: https://www.algolia.com/doc/rest#pagination-parameters
      //
      // See all the parameters here: https://www.algolia.com/doc/rest
      //
      // In the end, the underlying JS object being configured is the JavaScript helper of Algolia.
      // See https://community.algolia.com/algoliasearch-helper-js/docs/SearchParameters.html
      return {
        hitsPerPage: 1
      }
    },
    init: function(params) {
      // params.state
      // params.helper
      //
      // Nothing to do here, only present for documentation
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
