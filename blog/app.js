const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { result } = require('lodash');

const app = express();

const dbURL = "mongodb+srv://blog-test:16Anik80%40%21diu@cluster0.kfl3f.mongodb.net/node-test?retryWrites=true&w=majority";
mongoose.connect(dbURL, { useNewUrlParser:true,useUnifiedTopology:true})
.then((result) =>conlog.log("conncection done"))
.catch((err)=>console.log(err));
//Register View Engine 

app.set('view engine', 'ejs');

//Listed

app.listen(3000);

//static file



app.use(express.static('public'));

//Middleware

// app.use((req, res, next) => {
//     console.log('Hostname: ', req.hostname);
//     next();
// });

//app.use(morgan('tiny'));

//Routing
app.get('/', (req, res) => {
    //res.send('<p>Home Page</p>');
    //res.sendFile('./views/index.html', { root: __dirname });
    const blogs = [
        { title: 'Team Bangladesh lost againts Pakistan', body: '1st t20 lost against pakistan' },
        { title: 'Team Pakistant lost againts Bangladesh', body: '2md t20 lost against pakistan' },
    ];
    res.render('home', { title: 'Home', blogs });
});
app.get('/about', (req, res) => {
    //res.send('<p>Home Page</p>');
    // res.sendFile('./views/about.html', { root: __dirname });
    res.render('about-us');
});
app.get('/blog/create', (req, res) => {
    //res.send('<p>Home Page</p>');
    // res.sendFile('./views/about.html', { root: __dirname });
    res.render('create');
});


//Redirecct
app.get('/about-me', (req, res) => {
    //res.send('<p>Home Page</p>');
    res.redirect('/about');
});

//404 Page
app.use((req, res) => {
    res.status(404).render('404');
});