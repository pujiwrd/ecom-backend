const express = require ('express');
const app = express ();
const port = 3000;
const dbBackend3 = require ('./config/dbBackend3');
const cors = require ('cors');
const router = require ('./routes/route');
const path = require ('path')

app.use (cors());

dbBackend3 ();

app.use (express.json());
app.use (express.urlencoded({extended : true }));
app.use ('/uploads', express.static (path.join('uploads')));

app.use ('/', router);
app.get ( '/', (req, res) => {
    res.send ('Hello');
});

app.listen (port, () => {
    console.log (`server running at http://localhost:${port}`);
});

