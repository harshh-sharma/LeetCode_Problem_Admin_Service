const BaseError = require('./BaseError');
const { StatusCodes } = require('http-status-codes');

class BadRequest extends BaseError{
    constructor(propertyName,details){
        super('Bad Request',StatusCodes.BAD_REQUEST,`Invalid for ${propertyName} provieded`,details)
    }
}

module.exports = BadRequest;