const express = require('express');
const { PORT } = require('./config/serverConfig');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res) => {
    res.send('Server is live');
})

app.listen(PORT,() => {
    console.log(`server successfully running on ${PORT}`);
})