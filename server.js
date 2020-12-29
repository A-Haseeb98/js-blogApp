var posts = [
    {
        head : 'tital' , 
        text : 'Sample text'
    },
    {
        head : 'title' , 
        text : 'Sample text 2'
    }
]

const PORT = process.env.PORT || 5000;
var express = require("express");
var cors = require('cors')
var morgan = require('morgan')
var bodyParser = require('body-parser')

var app = express();

app.use(cors());
app.use(morgan('dev'))
app.use(bodyParser.json())

app.get("/", (req, res, next) => {
    console.log("some one get menu");
    res.send("Welcome");
});

app.post("/post", (req,res, next) => {
    // var title = req.body.heading;
    // var post = req.body.text;
    
posts.push(req.body);
console.log(req.body,' req body');
res.send('server responded');
})


app.listen(PORT, ()=>{
    console.log("server is running "+ PORT);
})


