const  {fakeUsers} =  require("./date");
const prompt = require('prompt');
prompt.start();
prompt.get(['name', 'address', 'language'], function (err, result) {
    console.log(fakeUsers(result.name, result.address, result.language));
    prompt.stop();
});

