const express = require('express');
const { PORT } = require('./config/serverConfig');
const apiRouter = require('./routes');
const errorHandler = require('./utils/ErrorHandler');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res) => {
    res.send('Server is live');
})

app.use('/api',apiRouter);

app.use(errorHandler);

app.listen(PORT,() => {
    console.log(`server successfully running on ${PORT}`);
})