
import puppeteer from "puppeteer";
import { createClient } from "@supabase/supabase-js";
import 'dotenv/config'

const supabaseUrl = "https://zaedmhdsfypksviqybsm.supabase.co"
const supabasePassword = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphZWRtaGRzZnlwa3N2aXF5YnNtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NDQ3ODkwMSwiZXhwIjoyMDEwMDU0OTAxfQ.WNAPY-MzL5mwV70cMLARzlpzmDAdvPBJsiaBY7bNVLM'
const supabase = createClient(supabaseUrl, supabasePassword)

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


const testData = { 
    event: '2023/04/30 R81 QE Speed Sportrock Performance Institute Alexandria VA',
    resultsURL: 'https://usacresults.org/scores?eid=1353'
}

//write code to put Scrape Event in supabase online. 

// const { data: todos, error } = await supabase.from('todos').select('*')

async function upsertEvents() { 

  const {data, error} = await supabase.from('USAClimbingEvents').upsert(testData)

  if (error) {
    console.error('Error pushing data to Supabase:', error, testData);
  } else {
    console.log('Data pushed to Supabase successfully:', data);
  }
}

upsertEvents()