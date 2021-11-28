const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const { result } = require('lodash');

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

//Middleware

// app.use((req, res, next) => {
//     console.log('Hostname: ', req.hostname);
//     next();
// });

//app.use(morgan('tiny'));


//Mongoess and sandbox route

app.get('/app-blog', (req, res) => {
    const blog = new Blog({
        title: 'new Blog',
        description: 'Test'
    });

    blog.save().then((result) => {
        res.send(result)
    }).catch((err) => {
        console.log(err)
    });
});

app.get('/all-blog', (req, res) => {
    Blog.find().then((result) => {
        res.send(result)
    }).catch((err) => {
        console.log(err);
    });
});
app.get('/single-blog', (req, res) => {
    Blog.findById('61a3d67d08c5371ee35a75e5').then((result) => {
        res.send(result)
    }).catch((err) => {
        console.log(err);
    });
});


//Routing
app.get('/', (req, res) => {
    //res.send('<p>Home Page</p>');
    //res.sendFile('./views/index.html', { root: __dirname });
    res.redirect('/blog');
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

//N ew routing 

app.get('/blog', (req, res) => {
    const blogs = [];
    Blog.find().sort({createdAt:-1}).then((result) => {
        res.render('home', { title: 'Home', blogs: result });
    }).catch((err) => {
        console.log(err);
    });
   
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
