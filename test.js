import puppeteer from 'puppeteer';

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://clck.ru/3APgAm');

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });
  await page.screenshot({ path: 'example1.png' });

  const element = await page.waitForSelector('#actionTree');
  
  // Do something with element...
  await element.click(); // Just an example.

  await page.screenshot({ path: 'example2.png' });

  // Dispose of handle
  await element.dispose();

  await browser.close();
})();