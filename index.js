const express = require('express');
const userModel = require('./users');
const bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', './views')
app.set('view engine', 'ejs')
app.get('/',function(req,res){

    res.render('grapes.ejs')
})

app.get('/about',function(req,res){
    res.send("<h1>Hello from homepage</h1>")
})

app.get("/create",async function(req,res){
    res.render('index.ejs');
})


app.post('/save-endpoint', (req, res) => {
    const editorState = req.body;
    // Save the data (for simplicity, we'll just store it in memory)
    savedData = editorState;
    // Respond with success or an appropriate status
    res.json({ success: true });
  });
  
  // Load Endpoint
  app.get('/load-endpoint', (req, res) => {
    // Respond with the saved data
    res.json(savedData || {}); // Return an empty object if no data is saved yet
  });
  
app.get("/allUsers", async function(req,res){
    let allusers = await userModel.find();
    res.send(allusers);
})

app.get('/delete',async function(req,res){
    let deletedUser = await userModel.findOneAndDelete({
        username:"Ajay"
    })
    res.send(deletedUser);
})

app.post('/create', async function(req,res){
    const body = req.body;
    let data = await userModel.create({
        username: req.body.username,
        Age: req.body.age,
        categories: req.body.categories
    })
    res.send(data);
});

// app.get('/test', function(req,res){
//     res.render('index.ejs');
// })
app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
});


