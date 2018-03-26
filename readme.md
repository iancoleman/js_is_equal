# js_is_equal

Universal equality checker for javascript values and objects.

Mainly intended to compare equality of parsed json structures (which may have
nested values).

## Usage

```
isEqual(1,1); // true
isEqual(1,2); // false

function fn() { return 1; }

var original = {
    x: 1,
    y: { test: "string" },
    z: fn,
}

var keyOrder = {
    z: fn,
    y: { test: "string" },
    x: 1,
}

var differentType = {
    x: 1,
    y: "different type",
    z: fn,
}

var missingKey = {
    X; 1,
    z: fn,
}

isEqual(original, keyOrder);       // true
isEqual(original, differentType);  // false
isEqual(original, missingKey);     // false
```
