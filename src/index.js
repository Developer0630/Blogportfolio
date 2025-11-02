const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./resources/routes');

// Static file
app.use(express.static(path.join(__dirname, 'public')));

// Middleware morgan log request
app.use(morgan('combined'));

// Middleware xử lý dữ liệu form
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Cấu hình handlebars
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
// __dirname = src, nên cần đi ra ngoài 1 cấp để tới resources/views
app.set('views', path.join(__dirname, '/resources/views'));

route(app);
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
