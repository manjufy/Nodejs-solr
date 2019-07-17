# Nodejs-solr

## Install Solr

Install solr and start it locally

Create a Core

Configure Schema

## Configure Solr Client

In `index.js`

```
const client = new SolrNode({
    host: '127.0.0.1',
    port: '8983',
    core: 'YourCoreName',
    protocol: 'http'
});
```
