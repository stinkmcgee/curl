const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;
const md5 = require('md5');
const https = require('https');
const fs = require('fs');

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
})

https.createServer({
    key: fs.readFileSync('PRIVATEKEY.key'),
    cert: fs.readFileSync('server.cert'),
    passphrase: 'P@ssw0rd'
}, app).listen(3000, () => {
    console.log('Listening...')
})