require('dotenv').config('');
const express = require('express');
const app =  express();
const fs = require('fs');
const path = require('path');
const hbs = require('hbs');

const port = process.env.port || 4000 ;


// const staticPath = path.join(__dirname, '../public');
const Template_Path = path.join(__dirname, '../Template/views')
const partial_path = path.join(__dirname, '../Template/partials')

app.set('view engine', 'hbs');
app.set('views', Template_Path);

hbs.registerPartials(partial_path);

// app.use(express.static(staticPath));

app.get('/', (req,res)=>{
    res.status(200).render('index');
});

app.get('/weather', (req,res)=>{
    res.status(200).render('weather');
});

app.get('/about', (req,res)=>{
    res.status(200).render('about');
});

app.get('*', (req,res)=>{
    res.status(200).render('error');
});

app.listen(port, '127.0.0.1', ()=>{
    console.log(`Listning...https://localhost:${port}`)
});