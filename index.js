 const express = require('express');
 const app = express();
 const mongoose = require('mongoose');
 const path = require('path');
 const PORT = 5000;
 const ejsMate = require('ejs-mate')
 const methodOverride = require('method-override');



 app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, 'public')));

 
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

 mongoose.connect('mongodb://127.0.0.1:27017/Hindu_Temple')
 .then(()=>{console.log('db connected')})
 .catch(()=>{console.log(Err)})

 const TempleRoutes = require('./Routes/TempleRoutes')


 app.use(TempleRoutes);


app.get('/', (req,res)=>{
    res.send('WORKING FINE')
    
})


app.listen(PORT, ()=>{
    console.log('server is started at', PORT)
})