'use strict';
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