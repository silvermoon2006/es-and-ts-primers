
function Override(label: string) {
  return function (target: any, key: string) {
      Object.defineProperty(target, key, {
          configurable: false,
          get: () => label,
          set: (value) => value = label
              
    });
  }
}

class Test {
  @Override('test')      // invokes Override, which returns the decorator
  name: string = 'pat';
}

let t = new Test();


console.log("1. Property Decorator ")
console.log(t.name);  // 'test'
console.log("--------------------")


function log(prefix?: string) {
  return (target:any) => {
    var f: any = function (...args:any[]) {
      console.log(prefix + target.name);
    }
    return f;
  };
}

@log('hello')
class World {
}
console.log("2. Class Decorator ")
const w = new World(); // outputs "helloWorld"
console.log("--------------------")



console.log("3. Param Decorator ")
function logPosition(target: any, propertyKey: string, parameterIndex: number) {
  console.log(parameterIndex + propertyKey);  //0say
}

class Cow {
    say( @logPosition b: string, c: boolean) {
    console.log(b); //hello
  }
}

new Cow().say('Hello', false); // outputs 1 (newline) hello
console.log("--------------------")
