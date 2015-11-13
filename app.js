$(function() {
  var search = instantsearch({
    appId: 'latency',
    apiKey: '6be0576ff61c053d5f9a3225e2a90f76',
    indexName: 'instant_search'
  });

  search.addWidget(
    instantsearch.widgets.searchBox({
      container: '#search-box',
      placeholder: 'iphone...'
    })
  );

  search.addWidget(
    instantsearch.widgets.bestResult($('#best-result'))
  );

  search.start();
});
