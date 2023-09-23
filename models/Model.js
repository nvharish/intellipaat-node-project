const mongoose = require('mongoose');

class Model {
    #model;

    constructor(schema, model) {
        this.model = mongoose.model(model, schema);
    }

    model() {
        return this.#model;
    }
}

module.exports = Model;