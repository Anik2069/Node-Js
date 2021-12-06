const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { result } = require('lodash');
const { render } = require('ejs');

const blogRoute =  require('./routes/blogRoutes')


const app = express();


const dbURL = "mongodb+srv://Test123:test123@cluster0.kfl3f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

//Register View Engine 

app.set('view engine', 'ejs');

//Listed


//static file



app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

//Middleware

// app.use((req, res, next) => {
//     console.log('Hostname: ', req.hostname);
//     next();
// });

//app.use(morgan('tiny'));
//routing

app.use(blogRoute);
//if need prefix
//app.use('blogs',blogRoute);
//404 Page
app.use((req, res) => {
    res.status(404).render('404');
});
