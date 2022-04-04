import { LightHouseWrapper } from "./lighthouse/lighthouse-wrapper";
const express = require('express');


const app = express();
const port = 3000;

app.get('/co2', (req, res) => {
let c02grams : any = '';
let lighthouse = new LightHouseWrapper();

(async () => {
   let urlVal:string = req.query.url;
    console.log('url'+urlVal);
    let co2g = await lighthouse.auditSite(urlVal);
    console.log('co2g'+co2g);
    c02grams = co2g;
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:58077');
    res. setHeader('Content-Type', 'application/json');
    res.send(co2g.toString());
})();
    //res.send(c02grams.toString() + 'g');
   // res.send('Hello World, from express');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));