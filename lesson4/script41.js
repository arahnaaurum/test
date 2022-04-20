'use strict';
// задание 4.1
function seekeys (obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log (key, obj[key])
        }
    }
}