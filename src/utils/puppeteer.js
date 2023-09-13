const { doc } = require("prettier");
const puppeteer = require("puppeteer");

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


  const eventListAll = await page.evaluate(() => Array.from(document.querySelectorAll('.eventList li'), (e) => ({
	title: e.querySelector('a').innerText,
	Results: e.querySelector('a').href 
  })))

  console.log(eventListAll);

  await browser.close();
}

run();
