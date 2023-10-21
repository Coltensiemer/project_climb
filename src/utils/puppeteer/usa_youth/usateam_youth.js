import puppeteer from "puppeteer";


export const youthTeams = async() => {
  // Launch the browser
  const browser = await puppeteer.launch({ headless: "new"});

  // Create a page
  const page = await browser.newPage();

  page.on('console', (msg) => console.log('PAGE LOG:', msg.text()));


  // Go to your site
  await page.goto('https://usacscoring.org/teams/skteams.html');

  //Idea to make sure every loads
  await page.waitForNetworkIdle();

  // Click on Teams tab once ideal settles 
await page.click('.pageEvents .filters #tabTeams'); 
  await page.waitForNetworkIdle();
  await page.screenshot({ path: "youth_team.png", fullPage: true });
  
  await page.click('.teamRosters');
  await page.waitForNetworkIdle();

  await page.screenshot({ path: "youth_team2.png", fullPage: true });

  const element = await page.$('#tabYouth')

//Checks to see image 
  await page.screenshot({ path: "youth_team3.png", fullPage: true });

// Evalutation for table -- NEED TO FIX


	
	


  // Dispose of handle
  await element.dispose();

  // Close browser.
  await browser.close();
}

youthTeams()