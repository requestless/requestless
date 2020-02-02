'use strict';

const chromium = require('chrome-aws-lambda');
const puppeteer = require('puppeteer-core');

exports.screenshot = async (request, response) => {
  const url       = request.query.url || 'https://google.com'
  const browser   = await puppeteer.launch({
                      args: chromium.args,
                      defaultViewport: chromium.defaultViewport,
                      executablePath: await chromium.executablePath,
                      headless: chromium.headless,
                    })
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
