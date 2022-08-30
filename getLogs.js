// Install the API client: https://www.algolia.com/doc/api-client/getting-started/install/javascript/?client=javascript
const algoliasearch = require("algoliasearch");
const dotenv = require("dotenv");

dotenv.config();

const length = process.argv[2]
const date = Date.parse(process.argv[3])

// Get your Algolia Application ID and (admin) API key from the dashboard: https://www.algolia.com/account/api-keys
// Add these environment variables to a `.env` file:
const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY;

console.log('Algolia Application ID: ', ALGOLIA_APP_ID)

// Start the API client
// https://www.algolia.com/doc/api-client/getting-started/instantiate-client-index/
const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);

// Get the logs limited to the specified length and filtered by the date passed as parameter
client.getLogs({
    offset: 0, // where to start from, default to 0
    length: length, // how many lines you want, default to 10
}).then(({ logs }) => {
    const logsFiltered = logs.filter( (log) => Date.parse(log.timestamp) > date)
    logsFiltered.reverse().forEach( (log ) =>  {
        console.log(`${log.timestamp} - ${log.url.substring(0, 100)}...`)
    })
    console.log(`Total number of calls: ${logsFiltered.length}`)
});
