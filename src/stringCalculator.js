"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(num) {
    if (num === '')
        return 0;
    var ele = /,|\n/;
    if (num.startsWith('//')) {
        var parts = num.split('\n');
        ele = new RegExp(parts[0].slice(2)); //this gives us custom delimiter
        num = parts[1];
    }
    var numArr = num.split(ele).map(Number);
    var negative = numArr.filter(function (num) { return num < 0; });
    if (negative.length > 0) {
        throw new Error("negative numbers not allowed: ".concat(negative.join(',')));
    }
    return numArr.reduce(function (sum, num) { return sum + num; }, 0);
}
;
exports.default = add;
