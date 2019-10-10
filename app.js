const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

// const expressHbs = require('express-handlebars');


const app = express();

// Setting view engine to EJS
app.set('view engine', 'ejs');

// Setting view engine to Handlebars
// app.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'}));
// app.set("view engine", "hbs");

// Setting view-engine to pug.
// app.set("view engine", "pug");
// Setting templating folder/directory Default is pug
app.set("views", "views");

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page NOT FOUND'});
});

app.listen(3000);
