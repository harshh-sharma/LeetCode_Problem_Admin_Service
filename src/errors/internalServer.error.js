const { StatusCodes } = require("http-status-codes");
const BaseError = require("./BaseError");

class InternalServerError extends BaseError{
    constructor(details){
        super('Internal server error',StatusCodes.INTERNAL_SERVER_ERROR,'Something went wrong !!',details)
    }
}

module.exports = InternalServerError;