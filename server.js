var client = require('./client_cloud.js');
const axios = require("axios");


let memeURL = '';
async function getData () {
    const mainUrl = `https://reddit.com/r/memes.json?limit=100`;
    await axios
    .get(mainUrl)
    .then((response) => {
        client.deleteByQuery({
            index: "memes",            
            body: {
                query: {
                    match_all: {}
                }
            }
        },  (err, resp) => {
            console.log(resp);
        });
        for (memeNumber = 0; memeNumber < 100; memeNumber++) {
            memeURL = response.data["data"]["children"][memeNumber]["data"]["url_overridden_by_dest"];
            memeTitle = response.data["data"]["children"][memeNumber]["data"]["title"];
            console.log(memeURL);
            console.log(memeTitle);
            client.index({  
                index: 'memes',
                body: {
                    url: memeURL,
                    title: memeTitle
                }
            }, (err, resp, status) => {
                  console.log(resp);
            });
        }
    })
}

getData();