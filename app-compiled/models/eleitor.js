'use strict';

var mongoose = require('mongoose');
module.exports = function () {
    return mongoose.model('eleitores', mongoose.Schema({
        titulo: {
            type: String,
            required: true
        },
        nome: {
            type: String,
            required: true
        },
        cpf: {
            type: String,
            required: true
        }

    }));
};