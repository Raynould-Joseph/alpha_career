const mysql = require('mysql2');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');
 
let cors = require("cors");
app.use(cors());
app.use(bodyparser.json());
 
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'EXOspace3e**',
    database: 'alphacareer',
    multipleStatements: true
});
 
mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});
 
 
app.listen(3000, () => console.log('Express server is running at port no : 3000'));

app.get('/course',(req,res)=>
{
    mysqlConnection.query('select * from course',(err, rows, fields) => {
        if(!err)
            res.send(rows);
        else
            console.log(err);
    })
})


app.get('/teacher',(req,res)=>
{
    mysqlConnection.query('select * from teacher',(err, rows, fields) => {
        if(!err)
            res.send(rows);
        else
            console.log(err);
    })
})


app.get('/paidcourse',(req,res)=>
{
    mysqlConnection.query('select * from paidcourse',(err, rows, fields) => {
        if(!err)
            res.send(rows);
        else
            console.log(err);
    })
})