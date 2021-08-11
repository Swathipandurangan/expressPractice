const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000;

console.log(path.join(__dirname, 'public'));
app.use('/static', express.static(path.join(__dirname, 'public')));

app.post('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(PORT, () => {
  console.log(`Sample app listening at http://localhost:${PORT}`);
});