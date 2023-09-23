const { Cluster } = require('puppeteer-cluster');
const scrapeEvents = require('./puppeteer')

async function clusters() {

const eventListAll = await scrapeEvents()
const urls = []

await eventListAll.map((event) => {
	const {title, urlResults} = event
	urls.push(urlResults)
})

console.log(urls)





//   const cluster = await Cluster.launch({
//     concurrency: Cluster.CONCURRENCY_CONTEXT,
//     maxConcurrency: 1,
// 	puppeteerOptions: { 
// 		headless: false
// 	}
//   });

//   cluster.on('taskerror', (err, data) => {
// 	console.log(`Error crawling ${data}: ${err.message}`);
// });

//   await cluster.task(async ({ page, data: result }) => {
//     await page.goto(result);
// 	await page.waitForSelector('#compLocation');

//   });

//   for(const result of urlResults) { 
// 	await cluster.queue(result)

// }

//   await cluster.idle();
//   await cluster.close();
}

clusters()