import { Cluster } from "puppeteer-cluster";
import { scrapeEvents } from "./puppeteer.js";

async function clusters() {
  
  const urls = [];
  try {
    const eventListAll = await scrapeEvents();

    eventListAll.forEach((event) => {
      if (event.resultsURL !== undefined) {
        const urlResults = event.resultsURL;
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
        headless: true,
      },
    });

    cluster.on("taskerror", (err, data) => {
      console.error(`Error crawling ${data}: ${err.message}`);
    });

    // Run each URL and gather info
    await cluster.task(async ({ page, data: url }) => {
      try {
        await page.goto(url);
        await page.waitForNetworkIdle();
        const data = await page.evaluate(() => {
          const compName = document.getElementById("compName");
          const compLocation = document.getElementById("compLocation");
          const compDate = document.getElementById("compDates");

          return {
            compName: compName?.innerText,
            compLocation: compLocation?.innerText,
            compDate: compDate?.innerText,
          };
        });

        console.log("results", data);
      } catch (err) {
        console.error("Error in page evaluation:", err);
      }
    });

    //@ts-ignore
    for (const url of urls) {
      await cluster.queue(url);
    }

    await cluster.idle();
    await cluster.close();
  } catch (err) {
    console.error("Error in clusters function:", err);
  }
}

clusters().catch((e) => {
  console.log("error", e);
});
