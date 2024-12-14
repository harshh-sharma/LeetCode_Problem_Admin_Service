const Problem = require("../models/problem.model")

class ProblemRepositories{
    async createProblem(problemData){
        try {
            const problem = await Problem.create({
                title:problemData?.title,
                description:problemData?.description,
                testCases:problemData.testCases ? problemData?.testCases : []
            })
            return problem;
        } catch (error) {
            throw error
        }
    }

    async getProblems(){
        console.log("treq, is coming in repo");
        
        const problems = await Problem.find({});
        console.log(problems);
        
        return problems;
    }

    async getProblem(problemId){
        const problem = await Problem.findById(problemId);
        return problem;
    }

    async deleteProblem(problemId){
        const problem = await Problem.findByIdAndDelete(problemId);
        console.log(problem);
        
        return problem;
    }
}

module.exports = ProblemRepositories;