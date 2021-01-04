const express = require('express');
const morgan = require('morgan')
const app = express();


/* function middleLogger(req, res, next) {
    console.log(`Route Received: ${req.protocol}://${req.get('host')}${req.originalUrl}`)
    next();
}
 */

// SETTINGS
app.set('appName', 'ExpressJSCourse' )
app.set('port', 5000)
app.set('view engine', 'ejs')
const port = app.get('port');



 //MIDDLEWARES
app.use(express.json());
app.use(morgan('dev'));

//ROUTES
app.get('/user' , (req, res) =>{
    res.json({
        username: 'ivancode',
        email: 'ivanrenescorcia@gmail.com'
    })
})

app.post('/user/:id' , (req, res) =>{
    console.log(req.body)
    console.log(req.params)
    res.json(req.body)
})

app.get('/user/:id' , (req, res) =>{
    res.json({
        username: 'ivancode',
        email: 'ivanrenescorcia@gmail.com'
    })
})



app.get('/test' , (req, res) =>{
    const data = [{fullname:'Ivan Rodriguez'},{fullname:'Hecto Cohen'},{fullname:'Sebastian Sandoval'}, {fullname : 'Juan Andres'}]
    res.render('index.ejs' ,{people : data})
})


app.use(express.static('public'))

app.listen(port, ()=>{
    console.log(app.get('appName'))
    console.log('Server on port ', port)
})

//TODO
//CREATE AN APP WITH EXPRESSJS, NODEJS,d MONGODB AND REACTJS