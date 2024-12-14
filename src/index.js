const express = require('express');
const { PORT } = require('./config/serverConfig');
const apiRouter = require('./routes');
const errorHandler = require('./utils/ErrorHandler');
const connectToDB = require('./config/dbConfig');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res) => {
    res.send('Server is live');
})

app.use('/api',apiRouter);

app.use(errorHandler);

app.listen(PORT,async() => {
    await connectToDB();
    console.log(`server successfully running on ${PORT}`);
})