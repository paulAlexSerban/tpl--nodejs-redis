const express = require('express');
const router = express.Router();
const redis = require('redis');
const client = redis.createClient({
  host: 'redis-server', // the name of te redis service defined inside the docker-compose file
  port: 6379 // default port number
});
client.set('visits', 0);

/* GET home page. */
router.get('/', function(req, res, next) {
  client.get('visits', (err, visits) => {
    res.send('Number of visits is ' + visits);
    client.set('visits', parseInt(visits) + 1)
  })
});

module.exports = router;
