const express = require('express');
const app = express();

// Static File
app.use(express.static('public'));

// React
app.set('views', `${__dirname}/views`);
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req, res) => {
  res.render('index', { name: 'John', title: 'Hello' });
});

app.listen(3000, () => {
  console.log('server start...3000');
});
