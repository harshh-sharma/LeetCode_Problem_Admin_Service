const NotFoundError = require('../errors/notFound.error');
const ProblemRepositories = require('../repositories/problem.repositories');
const {sanitizedMarkdown} = require('../utils');

class ProblemService{
    constructor(problemRepositry){
        this.problemRepository = problemRepositry
    }

    async createProblem(problemData){
        // sanitized problemDescription
        console.log("service",problemData);
        
        problemData.description = sanitizedMarkdown(problemData?.description);
        console.log("Service html",problemData);
        
        const problem = await this.problemRepository.createProblem(problemData);
        return problem;
    }

    async getProblems(){
        console.log("req coming in servive");
        
        const problems = await this.problemRepository.getProblems();
        return problems;
    }

    async getProblem(problemId){
        const problem = await this.problemRepository.getProblem(problemId);
        if(!problem) throw new NotFoundError('Problem Not Found with this id')
        return problem;
    }

    async deleteProblem(problemId){
        const problem = await this.problemRepository.deleteProblem(problemId);
        return problem;
    }
}

module.exports = ProblemService;