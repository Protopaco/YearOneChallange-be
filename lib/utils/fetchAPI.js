const axios = require("axios").default;
const apiKey = process.env.API_KEY;
const apiUrl = process.env.API_URL;
const testData = require("../../data/testData")

module.exports = (page, searchText) => {
    return testData;
    // var options = {
    //     method: 'GET',
    //     url: 'https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi',
    //     params: {
    //         q: `get:"${searchText}-!1900,2021-!0,5-!0,10-!0-!Movie-!Any-!Any-!gt100-!{downloadable}`,
    //         t: 'ns',
    //         cl: 'all',
    //         st: 'adv',
    //         ob: 'Relevance',
    //         p: page,
    //         sa: 'and'
    //     },
    //     headers: {
    //         'x-rapidapi-key': apiKey,
    //         'x-rapidapi-host': apiUrl
    //     }
    // };

    // return axios.request(options)
    //     .then(function (response) {
    //         return response.data;
    //     }).catch(function (error) {
    //         console.error(error);
    //     });
}