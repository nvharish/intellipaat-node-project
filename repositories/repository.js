const config = require('../config.json');
const mongoose = require('mongoose');

class Repository {
    #url = 'mongodb://' + config.dbHost + '/' + config.dbName;

    async connect() {
        await mongoose.connect(this.#url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }

    async disconnect() {
        await mongoose.connection.close();
    }
}

module.exports = Repository;