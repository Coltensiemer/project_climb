const { Cluster } = require('puppeteer-cluster');
const scrapeEvents = require('./puppeteer');
const { data } = require('autoprefixer');

async function clusters() {

const eventListAll = await scrapeEvents()
const urls = []

await eventListAll.map((event) => {
	const {title, urlResults} = event
	urls.push(urlResults)
})



  const cluster = await Cluster.launch({
    concurrency: Cluster.CONCURRENCY_CONTEXT,
    maxConcurrency:5,
	monitor: true,
	puppeteerOptions: { 
		headless: 'new'
	}
  });

  cluster.on('taskerror', (err, data) => {
	console.log(`Error crawling ${data}: ${err.message}`);
});

  await cluster.task(async ({ page, data: url }) => {
    await page.goto(url);
	await page.waitForNetworkIdle()
	const data = await page.evaluate(() => {
		const compName = document.getElementById('compName');
		const compLocation = document.getElementById('compLocation')
		const compDate = document.getElementById('compDates')

		return data = { 
			compName: compName.innerText,
			compLocation: compLocation.innerText,
			compDate: compDate.innerText
		}
		
	  });
	
	  console.log('results', data);
	
	});



  for(const url of urls) { 
	await cluster.queue(url)

}


  await cluster.idle();
  await cluster.close();
}

clusters()