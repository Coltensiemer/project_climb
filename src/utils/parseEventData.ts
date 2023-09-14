export function parseEventData(string: any) { 
	
// split string by space
const parts = string.split(" ");

//Date will always be first, locaitons will alwats be last
const date = parts[0]; 
const location = parts.slice(-2).join(' ')

const eventList = { 
	date: date,
	location: location
}

return eventList

}