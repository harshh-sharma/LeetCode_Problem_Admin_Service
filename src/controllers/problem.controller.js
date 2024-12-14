const NotImplementedError = require('../errors/notImplemented.error');

function addProblem(req,res,next){
    try {
        throw new NotImplementedError('addProblem');
    } catch (error) {
        next(error);
    }
}

function getProblems(req,res,next){
    try {
        throw new NotImplementedError('getProblems')
    } catch (error) {
        next();
    }
}

function getProblem(req,res,next){
    try {
        throw new NotImplementedError('getProblem')
    } catch (error) {
        next();
    }
}

function updateProblem(req,res,next){
    try {
        throw new NotImplementedError('updateProblem')
    } catch (error) {
        next();
    }
}

function deleteProblem(req,res,next){
    try {
        throw new NotImplementedError('deleteProblem')
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