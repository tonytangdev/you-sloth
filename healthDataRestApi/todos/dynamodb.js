'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

let options = {};

// connect to local DB if running offline
if (process.env.IS_OFFLINE) {
  options = {
    region: 'localhost',
    endpoint: 'http://127.0.0.1:8000',
  };
}

const client = new AWS.DynamoDB.DocumentClient(options);

module.exports = client;
