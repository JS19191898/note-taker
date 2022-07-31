const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes')
const apiRoutes = require('./routes/apiRoutes')

//Initializes the app and creates a port
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', apiRoutes);

//HTML Routes
app.use('/', htmlRoutes); 

//add app.listen function

app.listen(PORT, ()=>{
  
        console.log("Server running on http://localhost:"+ PORT)

})