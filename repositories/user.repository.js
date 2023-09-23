const User = require("../models/User");
const Repository = require("./Repository");

class UserRepository extends Repository {

    async save(data) {
        try {
            const user = new User(data);
            await this.connect();
            return await user.save();
        } catch (e) {
            return null;
        } finally {
            await this.disconnect();
        }
    }

    async find(username, password) {
        try {
            await this.connect();
            return await User.findOne({
                username: username,
                password: password
            });
        } catch (e) {
            return null;
        } finally {
            await this.disconnect();
        }
    }

    async findByUsername(username) {
        try {
            await this.connect();
            return await User.findOne({
                username: username
            });
        } catch (e) {
            return null;
        } finally {
            await this.disconnect();
        }
    }
}

module.exports = UserRepository;
