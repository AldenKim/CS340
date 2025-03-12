import { Array2DProxy } from "./ProxyClass";

let testProxy = new Array2DProxy("src/testFile");

console.log(testProxy.get(0,0));
console.log(testProxy.get(1,1));
console.log(testProxy.get(2,2));

testProxy.set(0,1,7);

console.log(testProxy.get(0,1));