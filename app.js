const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({ host: process.env.REDIS_HOST });

client.on('error', (err) => {
  console.error('Redis error:', err);
});

app.get('/', (req, res) => {
  client.incr('visits', (err, visits) => {
    if (err) {
      console.error('Redis error:', err);
    }
    res.send(`Number of visits: ${visits}`);
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
