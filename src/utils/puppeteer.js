
const { data } = require("autoprefixer");
const puppeteer= require("puppeteer");




const parseData = (string) => { 


  const parseData = { 
    date: string.split(" ")[0],
    state: string.split(" ").at(-1)
  }
  
  
  console.log(parseData)

}


parseData('2023/04/01 R51 QE LeadTR Inspire Rock Cypress Cypress TX')

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

  const scrapePage = async(url) => {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.goto(url);
  
    const pageTitle = await page.title();
    console.log(`Page Title: ${pageTitle}`);

    const data = await page.evaluate(() => document.getElementById('compName'), (e) => ({text: e.innerText}))
  
  console.log('Data of page:', data)
  
    await browser.close();

    return data
  }

 eventListAll.forEach( async({results},idx) => { 
  if (idx > 5) {
    return
  }

  console.log(results)
  // const page = await browser.newPage();

  const data = await scrapePage(results)

  console.log(data)


 })


  await browser.close();
}

run();
