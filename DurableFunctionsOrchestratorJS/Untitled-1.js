const df = require("durable-functions");
var count = 0;
module.exports = df.orchestrator(function* (context) {
    const outputs = [];
    count += 1;
    // Replace "Hello" with the name of your Durable Activity Function.
    outputs.push(yield context.df.callActivity("Hello", count));
    count += 5;
    outputs.push(yield context.df.callActivity("Hello", count));
    count += 3;
    outputs.push(yield context.df.callActivity("Hello", count));    
    //count += 10;
    return outputs;
});

const df = require("durable-functions");
var count = 0;
module.exports = df.orchestrator(function* (context) {
    const outputs = [];
    
    count += 1;
    context.log(count);
    outputs.push(yield context.df.callActivity("Hello", count));
    context.log(count);

    count += 2;
    context.log(count);
    outputs.push(yield context.df.callActivity("Hello", count));
    context.log(count);
    
    count += 3;    
    context.log(count);
    outputs.push(yield context.df.callActivity("Hello", count));
    context.log(count);

    //outputs.push(yield context.df.callEntity("DurableFunctionsEntityJS"));

    //count += 1;
    return outputs;
});


const df = require("durable-functions");
var count = 0;
module.exports = df.orchestrator(function* (context) {
    const outputs = [];
    console.log('Start count = %d', count);

    count += 1;
    
    let tmp1 = yield context.df.callActivity("Hello", count);
    console.log('one count = %d', tmp1);
    outputs.push(tmp1);

    tmp1 += 1;

    let tmp2 = yield context.df.callActivity("Hello", tmp1);
    console.log('two count = %d', tmp2);
    outputs.push(tmp2);
    
    tmp2 += 1;    

    let tmp3 = yield context.df.callActivity("Hello", tmp2);
    console.log('three count = %d', tmp3);
    outputs.push(tmp3)

    return outputs;
});

const df = require("durable-functions");
var count = 0;
module.exports = df.orchestrator(function* (context) {
    const outputs = [];
    console.log('Start count = %d', count);
    count += 1;
    // Replace "Hello" with the name of your Durable Activity Function.
    outputs.push(yield context.df.callActivity("Hello", count));
    count += 2;
    outputs.push(yield context.df.callActivity("Hello", count));
    count += 3;
    outputs.push(yield context.df.callActivity("Hello", count));    
    count += 1;
    return outputs;
});