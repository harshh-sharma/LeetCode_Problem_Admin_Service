const { StatusCodes } = require("http-status-codes");
const BaseError = require("../errors/BaseError");

function errorHandler(error,req,res,next){
    if(error instanceof BaseError){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:error.message,
            error:error.details,
            data:{}
        })
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success:false,
        message:'Internal server error',
        error:error.details,
        data:{}
    })
}

module.exports = errorHandler;