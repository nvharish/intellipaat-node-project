const { body, validationResult } = require('express-validator');
const UserRepository = require('../repositories/user.repository');
const { HTTP_STATUS_CODES, HttpStatusTexts, HttpStatusCodes } = require('../constants');

class UserValidator {
    validators = [
        body('username').isAlphanumeric(),
        body('password').isAlphanumeric().isLength({ min: 5 })
    ];

    async validate(req) {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return {
                errors: errors.array(),
                message: "Validation errors",
                code: HttpStatusCodes.HTTP_BAD_REQUEST
            };
        }

        let userRepository = new UserRepository();
        let user = await userRepository.findByUsername(req.body.username);

        if (user) {
            return {
                errors: [
                    {
                        username: "The username already exists"
                    }
                ],
                message: HttpStatusTexts[HttpStatusCodes.HTTP_BAD_REQUEST],
                code: HttpStatusCodes.HTTP_BAD_REQUEST
            };
        }

        return null;
    }
}

module.exports = UserValidator;
