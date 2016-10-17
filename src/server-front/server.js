const fetch = require('node-fetch');
const rx = require('rx');
const _ = require('lodash');
const express = require('express');
const config = require('./config');

const app = express();

const captor1 = 'soil';
const captor2 = 'temp';
const captor3 = 'light';

const c1 = [
  {
    name: 'station 1',
    data: [
      { label: captor1,   data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
      { label: captor2,   data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
      { label: captor3,  data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ]
  }
];

/**
 * Middlewares
 */

const Logger = (req, res, next) => {
  console.log('%s %s', req.method, req.url);
  next();
};
const header = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
};

app.use(header);
app.use(Logger);

/**
 *
 */

const getRandom = (min, max, pre = 100) => Math.floor((Math.random() * (max - min) + min) * pre) / pre;

const update    = (obj, label, val) => addItem(_.find(obj, (o) => o.label === label).data, val);
const addItem   = (tab, item) => {
  tab.shift();
  tab.push(item);
  return tab;
};

const fetching = () => {
  fetch('http://localhost:3000/read')
    .then((res) => res.json())
    .then(((body) => {
      update(c1[0].data, captor3, body[0]); // humidity
      update(c1[0].data, captor2, body[1]); // temp
      update(c1[0].data, captor1, body[2]); // light
    }))
    .catch((err) => console.log([]));
};

rx.Observable
  .interval(1000)
  .map(() => fetching())
  .subscribe();

/**
 * routing
 */

app.get('/data', (req, res) => {
  res.send(c1);
});

app.get('/read', (req, res) => {
  const ret = [];
  ret.push(getRandom(0, 20)); // temp
  ret.push(getRandom(0, 30)); // light
  ret.push(getRandom(20, 60, 1000)); // humidity

  res.send(ret);
});

app.get('/', (req, res) => {
  res.send();
});

/**
 *
 */

app.listen(3000, () => {
  console.log('listen on port 3000');
});
