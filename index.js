'use strict';

const puppeteer = require('puppeteer');
let browserPromise = puppeteer.launch({ args: [ 
  '--disable-dev-shm-usage',
  '--disable-setuid-sandbox',
  '--no-first-run',
  '--no-sandbox',
  '--no-zygote',
  '--single-process'
]})

exports.screenshot = async (request, response) => {
  const url       = request.query.url || 'https://google.com'
  const browser   = await browserPromise
  const page      = await browser.newPage()

  await page.goto(url)

  const image     = await page.screenshot()

  response.setHeader('Content-Type', 'image/png')
  response.send(image)
  browser.close()
  // response.status(401).send({
  //   error: 'Unauthorized'
  // });
  // // response.status(200).send({
  // //   message: 'Glorious success'
  // // });
};

exports.event = (event, callback) => {
  callback();
};
