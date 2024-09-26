"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(num) {
    if (num === '')
        return 0;
    if (!num.includes(','))
        return parseInt(num);
    var numArr = num.split(',').map(Number);
    return numArr[0] + numArr[1];
}
;
exports.default = add;
