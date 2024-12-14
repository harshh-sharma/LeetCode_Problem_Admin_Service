const mongoose = require('mongoose');

async function connectToDB(){
    try {
        const connection = await mongoose.connect(process.env.dbString);
        if(connection){
            console.log(`Db Successfully connected ${connection}`);
        }
    } catch (error) {
        console.log(`failed to connect db ${error}`)
    }
}

module.exports = connectToDB;