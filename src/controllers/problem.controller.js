function addProblem(req,res){
    return res.status(200).json({
        success:true,
        message:"sucessfully problem created"
    })
}

function getProblems(req,res){

}

function getProblem(req,res){

}

function updateProblem(req,res){

}

function deleteProblem(req,res){

}

module.exports = {
    addProblem,
    getProblems,
    getProblem,
    updateProblem,
    deleteProblem
}