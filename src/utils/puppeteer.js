
const puppeteer= require("puppeteer");
import { supabase } from "../../supabaseClient";


//WebScrapping 
async function run() {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto("https://usacresults.org");
  await page.waitForNetworkIdle()

  await page.screenshot({path: 'practice.png', fullPage: true})

  const eventListAll = await page.evaluate(() => Array.from(document.querySelectorAll('.eventList li'), (e) => ({
	title: e.querySelector('a')?.innerText,
	results: e.querySelector('a')?.href 
  })))

  console.log(eventListAll);

  await browser.close();
}

run();
