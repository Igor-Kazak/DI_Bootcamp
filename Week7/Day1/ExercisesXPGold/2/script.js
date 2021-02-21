//import { minLived } from "./date";

const  {minLived} =  require("./date");

const prompt = require('prompt');
prompt.start();

prompt.get(['userdate'], function (err, result) {
    console.log(minLived(result.userdate));
});