const  {checkName} =  require("./date");
const prompt = require('prompt');

prompt.start();
prompt.get(['name'], function (err, result) {
    console.log(checkName(result.name));
    prompt.stop();
});
