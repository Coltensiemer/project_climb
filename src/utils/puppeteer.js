

const puppeteer= require("puppeteer");
const cluster = require("puppeteer-cluster"); 





//WebScrapping for EventList, to be export into clusters.js to run mutiple clusters 
async function scrapeEvents() {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto("https://usacresults.org");
  await page.waitForNetworkIdle()

  await page.screenshot({path: 'practice.png', fullPage: true})

  const eventListAll = await page.evaluate(() => Array.from(document.querySelectorAll('.eventList li'), (e) => ({
	title: e.querySelector('a')?.innerText,
	urlResults: e.querySelector('a')?.href 
  })))


  await browser.close();

  return eventListAll
}

module.exports = scrapeEvents; 










// const scrapePage = async(url) => {
//   const browser = await puppeteer.launch({ headless: "new" });
//   const page = await browser.newPage();
//   await page.goto(url);
//   await page.waitForSelector('#compLocation');
//   const pageTitle = await page.title();
//   console.log(`Page Title: ${pageTitle}`);
//   const data = await page.evaluate(() => Array.from(document.getElementById('compLocation'), (e) => ({text: 'hello'}))) 
//   await browser.close();
//   return data
// }
// await Promise.all(eventListAll.slice(0,5).map(( async({results}) => { 
// console.log('Results', results)
// const data = await scrapePage(results)
// console.log('data', data)
// }))) 