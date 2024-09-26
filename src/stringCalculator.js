"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(num) {
    if (num === '')
        return 0;
    var ele = /,|\n/;
    var numArr = num.split(ele).map(Number);
    return numArr.reduce(function (sum, num) { return sum + num; }, 0);
}
;
exports.default = add;
