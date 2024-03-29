const { Client } = require('elasticsearch');

const client = new Client({
    host:`https://${process.env.USERNAME}:${process.env.PASSWORD}@node-elastic-medium.es.us-east4.gcp.elastic-cloud.com:9243`,
    cloud: {
        id: process.env.CLOUD_ID
      },
      auth: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD
      }
});

module.exports = client;