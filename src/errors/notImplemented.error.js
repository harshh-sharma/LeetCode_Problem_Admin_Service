const { StatusCodes } = require("http-status-codes");
const BaseError = require("./BaseError");

class NotImplementedError extends BaseError{
    constructor(methodName){
        super('Not Implemented',StatusCodes.NOT_IMPLEMENTED,'Something went wrong !!',`${methodName} not implemented`)
    }
}

module.exports = NotImplementedError;