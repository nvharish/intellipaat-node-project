const http = require('http');

const HttpStatusCodes = {
    HTTP_OK: 200,
    HTTP_BAD_REQUEST: 400,
    HTTP_CREATED: 201,
    HTTP_INTERNAL_SERVER_ERROR: 500,
    HTTP_METHOD_NOT_ALLOWED: 405,
    HTTP_NOT_FOUND: 404,
    HTTP_UNAUTHORIZED: 401,
    HTTP_FORBIDDEN: 403,
    HTTP_NO_CONTENT: 204
};

const HttpStatusTexts = {};

for (const key in HttpStatusCodes) {
    if (HttpStatusCodes.hasOwnProperty(key)) {
        HttpStatusTexts[HttpStatusCodes[key]] = http.STATUS_CODES[HttpStatusCodes[key]];
    }
}

module.exports = { HttpStatusCodes, HttpStatusTexts };