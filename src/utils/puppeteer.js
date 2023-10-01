
import puppeteer from "puppeteer";
import { createClient } from "@supabase/supabase-js";
import 'dotenv/config'

const supabaseUrl = "postgresql://postgres:cz5uhoH9maY0ARI6@db.zaedmhdsfypksviqybsm.supabase.co:5432/postgres"
const supabasePassword = 'cz5uhoH9maY0ARI6'
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
      title: e.querySelector("a")?.innerText,
      urlResults: e.querySelector("a")?.href,
    })),
  );

  await browser.close();

  return eventListAll;
}
