const SolrNode = require('solr-node');
const client = new SolrNode({
    host: '127.0.0.1',
    port: '8983',
    core: 'shop',
    protocol: 'http'
});

// JSON Data
const data = {
    id: 1,
    service: 'S3',
    category: 'Storage',
    url: '/aws/s3',
    keywords: ['Storage', 'S3']
};
 
// Update document to Solr server
client.update(data, function(err, result) {
   if (err) {
      console.log(err);
      return;
   }
   console.log('Response:', result.responseHeader);
});
