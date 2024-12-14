const NotImplementedError = require('../errors/notImplemented.error');
const { ProblemService } = require('../services');
const {ProblemRepositry} = require('../repositories');
const { StatusCodes } = require('http-status-codes');

const problemService = new ProblemService(new ProblemRepositry());

async function addProblem(req,res,next){
    try {
        const newProblem = await problemService.createProblem(req.body);
        console.log("body",req.body);
        
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:'Successfully problem created',
            error:{},
            data:newProblem
        })
    } catch (error) {
        next(error);
    }
}

async function getProblems(req,res,next){
    try {
        console.log("req is coming in controller");
        
       const problems = await problemService.getProblems();
       return res.status(StatusCodes.OK).json({
        success:true,
        message:'Successfully get all problems',
        data:problems,
        error:{}
       })
    } catch (error) {
        console.log("err",error)
        
        next(error);
    }
}

async function getProblem(req,res,next){
    try {
        const {id} = req.params;
        console.log("res is coming in ",id);
        
        const problem = await problemService.getProblem(id);
        return res.status(StatusCodes.OK).json({
            success:true,
            message:'Successfully get problem',
            data:problem,
            error:{}
        })
    } catch (error) {
        next(error);
    }
}

function updateProblem(req,res,next){
    try {
        throw new NotImplementedError('updateProblem')
    } catch (error) {
        next();
    }
}

async function deleteProblem(req,res,next){
    try {
        const {id} = req.params;

        const problem = await problemService.deleteProblem(id);
        console.log("ppr",problem);
        
        return res.status(StatusCodes.OK).json({
            success:true,
            message:'Successfully problem deleted'
        })
    } catch (error) {
        next();
    }
}

module.exports = {
    addProblem,
    getProblems,
    getProblem,
    updateProblem,
    deleteProblem
}