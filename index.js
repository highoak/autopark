
const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  
  const navigationPromise = page.waitForNavigation();
  
  await page.goto('https://www.metropark.co.il/select-department/select-parking-action/%D7%91%D7%A7%D7%A9%D7%94-%D7%9C%D7%AA%D7%95-%D7%90%D7%95%D7%A8%D7%97/%D7%AA%D7%95-%D7%90%D7%95%D7%A8%D7%97/?AuthorityID=5');
  
  await page.setViewport({ width: 1280, height: 913 });
  
  const personalIdSelector = '.container #txtPersId';

  await page.waitForSelector(personalIdSelector);
  await page.click(personalIdSelector);
  await page.type(personalIdSelector,'038112827', {delay: 20});


  await page.waitForSelector('.container > .main-block > .guest-form > form > .btn');
  await page.click('.container > .main-block > .guest-form > form > .btn');
  


//   const carNumber#txtCarNum


//   await navigationPromise
  
//   await browser.close()
})()