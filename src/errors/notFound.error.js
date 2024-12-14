const { StatusCodes } = require("http-status-codes");
const BaseError = require("./BaseError");

class NotFoundError extends BaseError{
    constructor(message){
        super(message,StatusCodes.NOT_FOUND,'Not Found',{})
    }
}

module.exports = NotFoundError;