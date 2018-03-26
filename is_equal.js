isEqual = new (function() {

    function checkEquality(a, b) {
        // must be same types
        if (typeof a !== typeof b) {
            return false;
        }
        // arrays
        if (isArray(a)) {
            if (a.length !== b.length) {
                return false;
            }
            for (var i=0; i<a.length; i++) {
                if (a[i] !== b[i]) {
                    return false;
                }
            }
            return true;
        }
        // objects
        if (isObject(a)) {
            // check all keys in a are in b
            for (key in a) {
                if (!(key in b)) {
                    return false;
                }
            }
            // check all keys in b are in a
            for (key in b) {
                if (!(key in a)) {
                    return false;
                }
            }
            // check all values of keys match
            for (key in a) {
                var isEqual = checkEquality(a[key], b[key]);
                if (!isEqual) {
                    return false;
                }
            }
            return true;
        }
        // all other cases
        // numbers
        // strings
        // functions
        return a === b;
    }

    function isObject(a) {
        return a && (typeof a  === "object");
    }

    function isArray (a) {
        return isObject(a) && (a instanceof Array);
    }

    function isFunction(a) {
        return a && {}.toString.call(a) === '[object Function]';
    }

    return checkEquality;

})();
