const UserRepository = require('../repositories/user.repository');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const { HttpStatusCodes, HttpStatusTexts } = require('../constants');

class UserService {
    #userRepository;

    constructor(userRepository) {
        this.#userRepository = userRepository;
    }

    async signup(user) {
        user.password = this.generatePasswordHash(user.password);
        return await this.#userRepository.save(user);
    }

    async signin(user) {
        let result = await this.#userRepository.findByUsername(user.username);
        let token = bcrypt.compareSync(user.password, result.password) ? this.generateToken() : null;
        return token;
    }

    generateToken(length = 64) {
        return crypto.randomBytes(length).toString('hex');
    }

    generatePasswordHash(password) {
        return bcrypt.hashSync(password, 10)
    }
}

module.exports = UserService;
