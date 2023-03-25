const express = require("express");


const homeRouter = express.Router();

homeRouter.get("/",(req,res,next)=>{
    const courses = [
        'PHP', 'JavaScript', 'React', 'Angular', 'Node.js', 'Python',
    ]
    res.render('index',{
        docTitle:"Home Page",
        text: 'Hello from Render Object',
        courseTitle:'List of Courses',
        courses,
        courseExist: courses.length > 0,
        pageIndex: true
    });
});

homeRouter.get('/about',(req,res)=>{
    res.render('about',{
        docTitle: 'About Page',
        pageAbout: true
    });
});



module.exports = homeRouter;