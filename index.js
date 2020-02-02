'use strict';

exports.screenshot = (request, response) => {
  console.log('request', request)
  response.status(401).send({
    error: 'Unauthorized'
  });
  // response.status(200).send({
  //   message: 'Glorious success'
  // });
};

exports.event = (event, callback) => {
  callback();
};
