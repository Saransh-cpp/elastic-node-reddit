const axios = require("axios");

async function getMeme () {
    const url = `https://reddit.com/r/memes.json`;
    await axios
    .get(url)
    .then((response) =>{
        memeURL = response.data["data"]["children"][2]["data"]["url_overridden_by_dest"];
        console.log(memeURL);
        memeTitle = response.data["data"]["children"][2]["data"]["title"];
        console.log(memeTitle);
    })
    .catch((error) => console.log(error))
}

getMeme()