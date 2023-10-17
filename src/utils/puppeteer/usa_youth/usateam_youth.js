import puppeteer from "puppeteer";


export const youthTeams = async() => {
  // Launch the browser
  const browser = await puppeteer.launch({ headless: "new"});

  // Create a page
  const page = await browser.newPage();

  page.on('console', (msg) => console.log('PAGE LOG:', msg.text()));


  // Go to your site
  await page.goto('https://usacresults.org/');

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


	// const tableData = await page.evaluate(() => {
	// 	const table = page.$('.skTable');
		
	// 	const wait = page.waitForSelector('.skTable');
	// 	const rows = table.querySelectorAll('tr');
	// 	const data = [];
	
	// 	// Loop through each row, skipping the header row (first row)
	// 	for (let i = 1; i < rows.length; i++) {
	// 	  const row = rows[i];
	// 	  const columns = row.querySelectorAll('td');
	
	// 	  // Extract the specific data from each column
	// 	  const teamName = columns[1].querySelector('div').textContent.trim();
	// 	  const region = columns[4].textContent.trim();
	// 	  const city = columns[5].textContent.trim();
	// 	  const state = columns[6].textContent.trim();
	// 	  const website = columns[7].querySelector('a').getAttribute('href');
	// 	  const contact = columns[8].textContent.trim();
	
	// 	  // Create an object for each row and push it to the data array
	// 	  const team = {
	// 		TeamName: teamName,
	// 		Region: region,
	// 		City: city,
	// 		State: state,
	// 		Website: website,
	// 		Contact: contact,
	// 	  };
	// 	  data.push(team);
	// 	}
	
	// 	return data;
	//   });
	
	//   console.log(tableData);

  // Dispose of handle
  await element.dispose();

  // Close browser.
  await browser.close();
}

youthTeams()