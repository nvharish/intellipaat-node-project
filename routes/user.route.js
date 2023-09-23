const UserController = require('../controllers/user.controller');
const UserRepository = require('../repositories/user.repository');
const UserService = require('../services/user.service');
const UserValidator = require('../validators/user.validator');
const router = require('express').Router();

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userValidator = new UserValidator();

const userController = new UserController(userService, userValidator);

router.post('/signin', userController.signin.bind(userController));
router.post('/signup', userValidator.validators, userController.signup.bind(userController));

module.exports = router;
