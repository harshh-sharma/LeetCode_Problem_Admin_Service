const express = require('express');
const {ProblemController} = require('../../controllers');

const problemRouter = express.Router();
console.log("req is coming");


problemRouter.route('/').get(ProblemController.getProblems)
                        .post(ProblemController.addProblem);

problemRouter.route('/:id').get(ProblemController.getProblem)
                           .delete(ProblemController.deleteProblem)
                           .put(ProblemController.updateProblem);


module.exports = problemRouter;