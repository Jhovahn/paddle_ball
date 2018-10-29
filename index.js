const express = require('express');
const app = express();
const port = 5000;
const path = require('path');

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => console.log(`Listing on port ${port}`));
