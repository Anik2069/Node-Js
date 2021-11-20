const express = require('express');

const app = express();

//Register View Engine 

 app.set('view engine', 'ejs');

//Listed

app.listen(3000);
//Routing
app.get('/', (req, res) => {
    //res.send('<p>Home Page</p>');
    //res.sendFile('./views/index.html', { root: __dirname });
    res.render('home');
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
app.use((req,res)=>{
    res.status(404).render('404');
});