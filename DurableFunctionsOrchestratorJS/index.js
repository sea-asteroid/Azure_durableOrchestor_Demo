/*
 * This function is not intended to be invoked directly. Instead it will be
 * triggered by an HTTP starter function.
 * 
 * Before running this sample, please:
 * - create a Durable activity function (default name is "Hello")
 * - create a Durable HTTP starter function
 * - run 'npm install durable-functions' from the wwwroot folder of your 
 *    function app in Kudu
 */

const df = require("durable-functions");
var count = 0;
module.exports = df.orchestrator(function* (context) {
    const outputs = [];
    console.log('Start count = %d', count);
//    var count = 0;
    count += 1;

    let tmp1 = yield context.df.callActivity("Hello", count);
    //let tmp1 = context.df.callActivity("Hello", count);
    console.log('one count = %d', tmp1);
    outputs.push(tmp1);
   // tmp1 += 1;

    let tmp2 = yield context.df.callActivity("Hello", tmp1);
    //let tmp2 = context.df.callActivity("Hello", tmp1);
    console.log('two count = %d', tmp2);
    outputs.push(tmp2);
   // tmp2 += 1;     

    let tmp3 = yield context.df.callActivity("Hello", tmp2);
    console.log('three count = %d', tmp3);
    outputs.push(tmp3)

    return outputs;
});

