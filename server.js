const express = require('express');
const app = express();


app.listen(8000, ()=>{
    console.log('Server on port 8000')
})

app.get('/' , (req, res) =>{
    res.send('Hello user');
})
