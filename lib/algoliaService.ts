import algoliasearch from "algoliasearch/lite";

const APPLICATION_ID = "EBK4SL19S7";
const SEARCH_API_KEY = "55e244d9faa873e5295388a961e3b3ea";

const client = algoliasearch(APPLICATION_ID, SEARCH_API_KEY);

export default client;
