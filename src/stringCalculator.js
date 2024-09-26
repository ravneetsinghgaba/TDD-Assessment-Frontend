"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(num) {
    if (num === '')
        return 0;
    if (!num.includes(','))
        return parseInt(num);
}
;
exports.default = add;
