var client = require("./client_local.js");

async function searchIndex() {
  const result = await client.search({
    index: "memes",
  });

  console.log(result);
}

searchIndex();
