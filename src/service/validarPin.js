const AuthError = require("../util/errors/AuthError.js");
module.exports = {
    validar: (pin) => {
        if(pin !== "1234") {
            throw new AuthError('Pin inválido!');
        }
    }
}
