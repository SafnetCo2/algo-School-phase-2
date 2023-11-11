function addTogether() {
    var len = argument.length;
    var a = argument[0];
    var b = argument[1];
    var isNum = function (arg) { return Number.isFinite(arg); };
    if (len === 1 && isNum(a)) {
        return function (x) {
            if (isNum(x)) {
                return a + x;
            }
            
        };
        
    }
    else if (len === 2 && isNum(a) && isNum(b)) {
        return a + b;
    
}

}
addTogether(1, 3);

function addTogether() {
    var len = arguments.length;
    var a = arguments[0];
    var b = arguments[1];
    var isNum = function (arg) { return Number.isFinite(arg); };
    if (len === 1 && isNum(a)) {
        return function (x) {
            if (isNum(x)) {
                return a + x;
            }
        };
    }
    else if (len === 2 && isNum(a) && isNum(b)) {
        return a + b;
    }
}