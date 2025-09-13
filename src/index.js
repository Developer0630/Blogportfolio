const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');

const app = express();
const port = 3000;

// Static file
app.use(express.static(path.join(__dirname, 'public')));

// Middleware morgan log request
app.use(morgan('combined'));

// Cấu hình handlebars
app.engine('hbs', engine({
    extname: '.hbs',
}));
app.set('view engine', 'hbs');
// __dirname = src, nên cần đi ra ngoài 1 cấp để tới resources/views
app.set('views', path.join(__dirname, '/resources/views'));

// Routes
app.get('/trangchu', (req, res) => {
    res.render('home'); 
});

app.get('/news', (
    req, res) => {
    res.render('news'); 
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
