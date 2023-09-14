const { doc } = require("prettier");
const puppeteer= require("puppeteer");
// const parseEventData =  require("./parseEventData");

type eventList = { 
  title: string,
  results: string
}

async function run() {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto("https://usacresults.org");
  await page.waitForNetworkIdle()

  const title = await page.evaluate(() => document.title);
  const text = await page.evaluate(() => document.body.innerText);
  
//   await page.click('#tabTeams') 

  await page.screenshot({path: 'practice.png', fullPage: true})


  const eventListAll: eventList = await page.evaluate(() => Array.from(document.querySelectorAll('.eventList li'), (e: Element) => ({
	title: e.querySelector('a')?.innerText,
	results: e.querySelector('a')?.href 
  })))

  console.log(eventListAll);

  await browser.close();
}

run();
