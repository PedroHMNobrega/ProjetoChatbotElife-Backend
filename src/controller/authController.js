const validarPin = require("../service/validarPin.js");
module.exports = {
    auth: (req, res, next) => {
        const pin = req.body.pin;

        try {
            validarPin.validar(pin);
            res.status(200);
            res.json({message: "Pin valido"});
        } catch (e) {
            next(e);
        }
    }
}
