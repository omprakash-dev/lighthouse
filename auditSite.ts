import { LightHouseWrapper } from "./lighthouse/lighthouse-wrapper";
const express = require('express');


const app = express();
const port = process.env.PORT || 3000;

app.get('/co2', (req, res) => {
    let c02grams: any = '';
    let lighthouse = new LightHouseWrapper();

    (async () => {
        try {
            let urlVal: string = req.query.url || '';
            if (urlVal) {
                console.log('url' + urlVal);
                let co2g = await lighthouse.auditSite(urlVal);
                console.log('co2g' + co2g);
                c02grams = co2g;
                // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:58077');
                res.setHeader('Content-Type', 'application/json');
                res.status(200).send(co2g.toString());
            }
            else {
                console.log('url not found');
                res.setHeader('Content-Type', 'application/json');
                res.status(500).send('url not found');
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    })();
    //res.send(c02grams.toString() + 'g');
    // res.send('Hello World, from express');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));