'use strict';
// задание 4.1
function seekeys (obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log (key, obj[key])
        }
    }
}

// задание 4.2
function checkProp (str, obj) {
    return str in obj
}

// задание 4.3
function createObj () {
    return {}
}

// задание 4.4
function Device (brand) {
    this.type = 'electronic';
    this.work = false;
    this.brand = brand;
};
Device.prototype.turnOn = function () {
    this.work = true
};
Device.prototype.turnOff = function () {
    this.work = false
};


function Lamp (brand, brightness) {
    Device.call (this, brand);
    this.brightness = brightness
};
Lamp.prototype = new Device();
    // насколько я знаю, более принят такой вариант, с копированием прототипа:
    // Lamp.prototype = Object.create(Device.prototype);
Lamp.prototype.constructor = Lamp;
 // переопределенная ф-ция родителя
Lamp.prototype.turnOn = function () {
    this.work = true
    console.log (`Me shines as ${this.brightness} VT!`)
};
// новая ф-ция, кот. нет у родителя
Lamp.prototype.blink = function () {
    console.log ('Me blinks!')
};


function Mixer (brand, speed) {
    Device.call (this, brand);
    this.rotationSpeed = speed
};

Mixer.prototype = new Device();
Mixer.prototype.constructor = Mixer;

Mixer.prototype.turnOn = function () {
    this.work = true
    console.log (`Me not shines, me rotates ${this.rotationSpeed} times per sec!`)
};

const lamp1 = new Lamp('Xiaomi', '60');
const mixer1 = new Mixer('Bosch', '10')


// задание 4.5
class Device {
    constructor (brand) {
        this.type = 'electronic';
        this.work = false;
        this.brand = brand;
    }
    turnOn = function () {
        this.work = true
    }   
    turnOff = function () {
        this.work = false
    }
}

class Lamp extends Device {
    constructor (brand, brightness) {
        super(brand);
        this.brightness = brightness;
    }
    turnOn = function() {
        this.work = true
        console.log (`Me shines as ${this.brightness} VT!`)
    }
    blink = function () {
        console.log ('Me blinks!')
    }
}

class Mixer extends Device {
    constructor (brand, speed) {
        super(brand);
        this.rotationSpeed = speed;
    }
    turnOn = function() {
        this.work = true
        console.log (`Me not shines, me rotates ${this.rotationSpeed} times per sec!`)
    }
}

const lamp2 = new Lamp('LG', '12');
const mixer2 = new Mixer('Kitchen', '8')