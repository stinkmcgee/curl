const express = require('express');
const bodyParser = require('body-parser');

const port = 443;

const app = express();

app.use(bodyParser.json());

app.get('/', (req,res)=>{
    res.send("Hello browser");
});

app.post('/login',(req,res)=>{
    console.log(JSON.stringify(req.body));
    if(req.body.userName == "maddiec" && req.body.password=="gross"){
        res.send("Welcome")
    } else{
        res.send("Whomst is you? ");
    }
});

app.listen(port,()=>{});
