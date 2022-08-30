# JavaScript Algolia Utilities

This quickstart demonstrates various usages of the [Algolia JavaScript API Client](https://www.algolia.com/doc/api-client/getting-started/install/javascript/?client=javascript).

## Setting up the quickstart

### Prerequisites

- An Algolia account. If you don't have one already, [create an account for free](https://www.algolia.com/users/sign_up).
- A Node local environment, or [Docker](https://www.docker.com/get-started).

1. Create an Algolia Application and an [Algolia Index](https://www.algolia.com/doc/guides/getting-started/quick-start/tutorials/getting-started-with-the-dashboard/#indices)
2. Copy the file [.env.example](.env.example) and rename it to `.env`
3. Set the environment variables `ALGOLIA_APP_ID` and `ALGOLIA_API_KEY` in the `.env` file. You can obtain those from the [Algolia Dashboard](https://www.algolia.com/api-keys/). The `ALGOLIA_API_KEY` should be the "Admin API Key".

## How to use

Once setup, you can run each of the script in this folder using the Node command line.
Example: to execute the `getLogs.js` script:

```bash
node getLogs.js <length> <date>
```
where:

- `<length>` is the maximum number of logs retrieved.
- `<date>` is the date from which the results are obtained.

Example:
```bash
node getLogs.js 10 2022-08-29T12:15:00Z
```

### Output:
```bash
Algolia Application ID:  <ALGOLIA_APP_ID>
2022-08-30T05:50:55Z - /1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(4.13.0)%3B%20Node.js%20(14.17.1)%...
2022-08-30T05:50:55Z - /1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(4.13.0)%3B%20Node.js%20(14.17.1)%...
2022-08-30T06:10:50Z - /1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(4.13.0)%3B%20Browser%20(lite)%3B%...
Total number of calls: 3
```
It shows the number of requests that have been done between the specified date ("2022-08-29T12:15:00Z") and now. 
The calls are shown with the following format:

`timestamp` - `100 first characters of the URL`

At the end it shows the total number of calls that have been made.
