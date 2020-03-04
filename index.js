ID_NUMBER = '012345678'
CAR_NUMBER = '0123456'
PHONE_NUMBER = '0123456789'

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();

  const navigationPromise = page.waitForNavigation();
  
  await page.goto('https://www.metropark.co.il/select-department/select-parking-action/%D7%91%D7%A7%D7%A9%D7%94-%D7%9C%D7%AA%D7%95-%D7%90%D7%95%D7%A8%D7%97/%D7%AA%D7%95-%D7%90%D7%95%D7%A8%D7%97/?AuthorityID=5');
  
  await page.setViewport({ width: 1280, height: 913 });
  
  const personalIdSelector = '#txtPersId';
  await page.waitForSelector(personalIdSelector);
  await page.click(personalIdSelector);
  await page.type(personalIdSelector, ID_NUMBER, {delay: 20});
  
  const checkIdBtn = 'body > div.wrapper > div > div:nth-child(6) > div > form > button'
  await page.waitForSelector(checkIdBtn);
  await page.click(checkIdBtn);
  
  const carNumberSelector = '#txtCarNum';
  await page.waitForSelector(carNumberSelector);
  await page.click(carNumberSelector);
  await page.type(carNumberSelector, CAR_NUMBER, {delay: 20});

  const phoneNumberSelector = '#txtPhone1';
  await page.waitForSelector(phoneNumberSelector);
  await page.click(phoneNumberSelector);
  await page.type(phoneNumberSelector, PHONE_NUMBER, {delay: 20});

  const registerBtn = 'body > div.wrapper > div > div:nth-child(6) > div > form > button';
  await page.waitForSelector(registerBtn);
  await page.click(registerBtn);

  
  await page.waitForSelector('body > div.wrapper > div > div:nth-child(5) > div > table');
  
//   await page.pdf();

//   await browser.close()
})()