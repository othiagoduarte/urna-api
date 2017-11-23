const mongoose = require('mongoose');
module.exports = function() {
    return mongoose.model('eleitores', mongoose.Schema({  
        titulo: {
            type: String,
            required: true,
            unique:true
        },
        nome: {
            type: String,
            required: true
        },
        cpf: {
            type: String,
            required: true,
            unique:true
        }, 
    }))
};