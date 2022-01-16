var client = require('./client_local.js');

client.indices.create({  
    index: 'memes'
  }, (err, resp, status) =>{
    if(err) {
      console.log(err);
    }
});