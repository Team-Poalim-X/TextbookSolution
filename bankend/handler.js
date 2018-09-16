'use strict';

const GetBalance = require('./getbalance');

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.getaccountbalance = async (event, context) => {
  //TODO: connect to cognito
  var balance = await GetBalance.get_balance_for_user('A1-at-yoman.io');

  return {
    statusCode: 200,
    headers: {
        "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
    },
    body: JSON.stringify({
      message: 'You are fabolous! ' + balance ,
      CurrentBalance: balance,
      input: event,
    }),
  };
};
