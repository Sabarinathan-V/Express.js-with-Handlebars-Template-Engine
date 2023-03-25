const express = require("express");
const app = express();
const path = require('path');
const rootDir = require("./utils/root");
const homeRouter = require('./Router/home');
const { engine } = require('express-handlebars')

app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', engine({ extname: '.hbs', defaultLayout: path.join(rootDir, 'views', 'main') }));
app.set('view engine', 'hbs');


app.use(homeRouter);
app.use((req,res)=>{
    res.render('errorPage',{
        docTitle: '404 Error',
        page404: true
    })
})

app.listen(3000);
