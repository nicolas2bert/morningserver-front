const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const proxy = require('http-proxy-middleware');

const app = express();

const proxyOption = {
    target: 'http://127.0.0.1:5050',
    pathRewrite: pathProxy => pathProxy.replace('/proxy', '/'),
    // onProxyReq: (proxyReq, req) => {
    //     proxyReq.setHeader('x-orbit-instance-id', req.params.instanceId);
    //     proxyReq.setHeader('proxy_path', `/proxy/${req.params.instanceId}${req.path}`);
    // },
};

app.use('/proxy', proxy(proxyOption));

app.use(bodyParser.json());

// views
app.set('view engine', 'ejs'); // set up ejs for templating
app.set('views', path.join(__dirname, '/views'));

// public image, css, js
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

// app.post('/api/openbrowsertab', (req, res) => {
//     console.log('/api/openbrowsertab!!!', req.body);
//
//     return res.json({ ok: 'ok' });
// });


const port = process.env.PORT || '3001';

app.listen(port);
