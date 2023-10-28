
import puppeteer from "puppeteer";
import 'dotenv/config'




// const supabase = createClient()

//WebScrapping for EventList, to be export into clusters.js to run mutiple clusters
export const scrapeEvents = async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto("https://usacresults.org");
  await page.waitForNetworkIdle();

  await page.screenshot({ path: "practice.png", fullPage: true });

  const eventListAll = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".eventList li"), (e) => ({
      event: e.querySelector("a")?.innerText,
      resultsURL: e.querySelector("a")?.href,
    })),
  );

  await browser.close();
return eventListAll
}



// async function upsertEvents() { 

//   const events = await scrapeEvents()

//   const { data, error } = await supabase.from('USAClimbingEvents').upsert(events, { onConflict: 'resultsURL', ignoreDuplicates: true})

//   if (error) {
//     console.error('Error pushing data to Supabase:', error, events);
//   } else {
//     console.log('Data pushed to Supabase successfully:');
//   }
// }

// upsertEvents()