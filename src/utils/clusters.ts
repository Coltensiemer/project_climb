// const { Cluster } = require('puppeteer-cluster');
import { Cluster } from "puppeteer-cluster";
import  scrapeEvents  from "./puppeteer.js";


type dataFormat = { 
  compName: string | undefined,
  compLocation: string | undefined,
  compDate: string | undefined,

}

async function clusters() {
  const eventListAll = await scrapeEvents();
  const urls : string[] = [];

   eventListAll.map((event) => {
    if (event.urlResults !== undefined) {
      const urlResults: string = event.urlResults;
      urls.push(urlResults);
    } else {
      // Handle the case when urlResults is undefined
      console.error("urlResults is undefined");
    }
  });

  const cluster = await Cluster.launch({
    concurrency: Cluster.CONCURRENCY_CONTEXT,
    maxConcurrency: 5,
    monitor: true,
    puppeteerOptions: {
      headless: "new",
    },
  });

  cluster.on("taskerror", (err, data) => {
    console.log(`Error crawling ${data}: ${err.message}`);
  });
// Run each URL and gather info
  await cluster.task(async ({ page, data: url }) => {
    await page.goto(url);
    await page.waitForNetworkIdle();
    let  data : dataFormat = await page.evaluate(() => {
      const compName = document.getElementById("compName");
      const compLocation = document.getElementById("compLocation");
      const compDate = document.getElementById("compDates");

      return (data = {
        compName: compName?.innerText,
        compLocation: compLocation?.innerText,
        compDate: compDate?.innerText,
      });
    });

    console.log("results", data);
  });

  for (const url of urls) {
    await cluster.queue(url);
  }

  await cluster.idle();
  await cluster.close();
}

clusters();
