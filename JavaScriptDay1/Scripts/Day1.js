'use strict';

var obj = {
    _firstName: "Eric",
    _lastName: "Siebeneich",
    required_country: "",
    get firstName() {
        return this._firstName;
    },
    set firstName(value) {
        this._firstName = value;
    },
    get firstName() {
        return this._firstName;
    },
    set firstName(value) {
        this._firstName = value;
    }
};

function addValidation(obj) {
    var newObj = {};
    for (var prop in obj) {
        if (prop.indexOf("required_") === 0) {
            var newProp = prop.substring(8);
            newObj[newProp] = obj[prop];
            Object.defineProperty(newObj, newProp.substring(1), {
                set: function (value) {
                    if (!value) {
                        throw new Error(newProp.substring(1) + " is required");
                    }
                    newObj[newProp] = value;
                },
                get: function () {
                    return newObj[newProp];
                }
            });
        }
        else {
            newObj[prop] = obj[prop];
        }
    }
    return newObj;
}

obj = addValidation(obj);