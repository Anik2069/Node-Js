

const express = require('express');

const router = express.Router();
const blogController  = require('../controller/blogController');
//Mongoess and sandbox route

router.get('/router-blog', (req, res) => {
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

router.get('/all-blog', (req, res) => {
    Blog.find().then((result) => {
        res.send(result)
    }).catch((err) => {
        console.log(err);
    });
});
router.get('/single-blog', (req, res) => {
    Blog.findById('61a3d67d08c5371ee35a75e5').then((result) => {
        res.send(result)
    }).catch((err) => {
        console.log(err);
    });
});


//Routing
router.get('/', (req, res) => {
    //res.send('<p>Home Page</p>');
    //res.sendFile('./views/index.html', { root: __dirname });
    res.redirect('/blog');

    // const blogs = [
    //     { title: 'Team Bangladesh lost againts Pakistan', body: '1st t20 lost against pakistan' },
    //     { title: 'Team Pakistant lost againts Bangladesh', body: '2md t20 lost against pakistan' },
    // ];
    // res.render('home', { title: 'Home', blogs });
});
router.get('/about', (req, res) => {
    //res.send('<p>Home Page</p>');
    // res.sendFile('./views/about.html', { root: __dirname });
    res.render('about-us');
});
router.get('/blog/create', (req, res) => {
    //res.send('<p>Home Page</p>');
    // res.sendFile('./views/about.html', { root: __dirname });
    res.render('create');
});

//N ew routing 

router.get('/blog',blogController.blog_index);

router.post('/blog', (req, res) => {
    // console.log(req.body);

    const blog = new Blog(req.body);

    blog.save().then((result) => {
        res.redirect('/blog');
    }).catch((err) => {
        console.log(err);
    });
});
router.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id).then((result) => {
        res.render('details', { blog: result, title: 'Blog Details' });
    }).catch((err) => {
        console.log(err);
    });
});
router.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id).then((result) => {
       res.json({redirect : '/blog'});
    }).catch((err) => {
        console.log(err);
    });
});

//Redirecct
router.get('/about-me', (req, res) => {
    //res.send('<p>Home Page</p>');
    res.redirect('/about');
});

module.exports = router;