const { Client } = require('elasticsearch');

const client = new Client({
    host:`http://localhost:9200/`,
});

module.exports = client;