"use strict";
class Drawer {
    constructor() {
        this.items = [];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem() {
        return this.items.pop();
    }
    removeAll() {
        const returnVal = [...this.items];
        this.items = [];
        return returnVal;
    }
}
class Dresser {
    constructor() {
        this.top = new Drawer();
        this.middle = new Drawer();
        this.bottom = new Drawer();
    }
}
function functionality() {
    var _a, _b, _c;
    const testDresser = new Dresser();
    console.log("Testing isEmpty(): " + testDresser.top.isEmpty());
    testDresser.top.addItem({ style: "long", color: "white" });
    testDresser.middle.addItem({ style: "t-shirt", size: "M" });
    testDresser.bottom.addItem({ waist: 10, length: 10 });
    console.log("Testing add/remove: " + ((_a = testDresser.top.removeItem()) === null || _a === void 0 ? void 0 : _a.style));
    console.log("Testing add/remove: " + ((_b = testDresser.middle.removeItem()) === null || _b === void 0 ? void 0 : _b.style));
    console.log("Testing add/remove: " + ((_c = testDresser.bottom.removeItem()) === null || _c === void 0 ? void 0 : _c.waist));
    console.log("Testing isEmpty(): " + testDresser.top.isEmpty());
    testDresser.top.addItem({ style: "long", color: "white" });
    testDresser.top.addItem({ style: "long", color: "black" });
    testDresser.top.addItem({ style: "long", color: "blue" });
    console.log("Testing removeAll: " + testDresser.top.removeAll().length);
    console.log("Testing isEmpty(): " + testDresser.top.isEmpty());
}
functionality();
