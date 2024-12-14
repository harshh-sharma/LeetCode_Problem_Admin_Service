const { default: mongoose } = require("mongoose");

const problemSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'title is required']
    },
    description:{
        type:String,
        required:[true,'description is required']
    },
    difficulty:{
        type:String,
        enum:['easy','medium','hard'],
        default:'easy',
        required:[true,'difficulty is required']
    },
    testCases:[
        {
            input:{
                type:String,
                required:true
            },
            output:{
                type:String,
                required:true
            }
        }
    ],
    editorial:{
        type:String
    }
});

const Problem = mongoose.model('Problem',problemSchema);
module.exports = Problem;