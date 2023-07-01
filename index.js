/*************
 * function to read content from the file 
 */


// const fs = require('fs')
// function callbackFn(err,data) {
//     console.log(data)
// }

// fs.readFile("a.txt","utf-8",callbackFn)


const bodyParser = require('body-parser');
const express = require('express')
const app = express();
const port = 3000;
app.listen(port,started)

app.use(bodyParser.json())

function CalculateSum(counter){
    var sum =0;
    for(let i= 1 ;i<=counter ;i++)
    {
        sum += i;
    }
    return sum ;
}

function CalculateMul(counter){

    var mul = 1;
    for(let i=1 ;i<=counter ;i++)
    {
        mul *= i;
    }

    return mul;
}

//handler

function helloWorld(req,res){
    res.sendFile(__dirname + "/index.html")
}

function handleadditionMul(req,res){
    var counter  = req.query.counter ;
    var CalculatedSum = CalculateSum(counter);
    var CalculatedMul = CalculateMul(counter);
    var answerObject = {
        sum : CalculatedSum,
        mul : CalculatedMul
    }
    res.send(answerObject);
}



app.get('/',helloWorld);
app.get('/handleSum',handleadditionMul);








function started(){
    console.log(`Example app started at port number ${port}`);
}