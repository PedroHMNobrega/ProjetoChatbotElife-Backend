const validarPin = require("../service/validarPin.js");
module.exports = {
    auth: (req, res, next) => {
        const pin = req.body.pin;

        try {
            validarPin.validar(pin);
            res.status(204);
            res.end();
        } catch (e) {
            next(e);
        }
    }
}
