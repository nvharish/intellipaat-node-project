class ResponseMiddleware {
    static render(req, res, next) {
        res.jsonSuccess = (data, message, code = 200) => {
            let response = {
                status: "Success",
                message: message
            }

            if (data) {
                response["data"] = data;
            }

            return res.status(code).json(response);
        }

        res.jsonError = (errors, message, code = 500) => {
            let response = {
                status: "Error",
                message: message
            };

            if (errors) {
                response["errors"] = errors;
            }

            return res.status(code).json(response);
        }

        next();
    }
}

module.exports = ResponseMiddleware;