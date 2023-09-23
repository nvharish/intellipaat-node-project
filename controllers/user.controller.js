const { HttpStatusTexts, HttpStatusCodes } = require("../constants");

class UserController {
    #userService;
    #userValidator;

    constructor(userService, userValidator) {
        this.#userService = userService;
        this.#userValidator = userValidator;
    }

    async signin(req, res) {
        let token = await this.#userService.signin(req.body);
        if (token) {
            res.jsonSuccess({
                message: "User authenticated successfully",
                token: token
            });
        } else {
            res.jsonError(null, HttpStatusTexts[HttpStatusCodes.HTTP_UNAUTHORIZED], HttpStatusCodes.HTTP_UNAUTHORIZED);
        }
    }

    async signup(req, res) {
        let error = await this.#userValidator.validate(req);
        if (error) {
            res.jsonError(error.errors, error.message, error.code);
        } else {
            let user = await this.#userService.signup(req.body);
            res.jsonSuccess({ "id": user._id }, HttpStatusTexts[HttpStatusCodes.HTTP_CREATED], HttpStatusCodes.HTTP_CREATED);
        }
    }
}

module.exports = UserController;