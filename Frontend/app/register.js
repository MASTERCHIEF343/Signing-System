"use strict";
var Register = (function () {
    function Register(id, name, email, passwd, direct) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.passwd = passwd;
        this.direct = direct;
    }
    return Register;
}());
exports.Register = Register;
//# sourceMappingURL=register.js.map