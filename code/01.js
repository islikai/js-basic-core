// let t1 = {
//   a: 10,
//   b: 'test',
// }

// let t2 = t1;


// console.log(t1.a); // 10

// t2.a = 20;
// console.log(t1.a); // 20 
// console.log(t2.a); // 20


/* ============== */
let t1 = {
  name: 'aa',
  age: 10,
}

function change(v) {
  v.age = 20;
  v = {
    name: 'cc',
    age: 30,
  }
  return v;
}

let t2 = change(t1);

console.log(t1.age); // 20
console.log(t2.age); // 30

let Car = function() {};
let car = new Car();

console.log(car instanceof Car);

let str = new String('test');
console.log(str instanceof String);

let str2 = 'Covid-19';
console.log(str2 instanceof String);

// 手动实现一个instanceof检测方法
function myInstanceof(left, right) {
  // 这里使用typeof判断基本类型，如果是直接返回false
  if (typeof left !== 'object' || left === null) {
    return false;
  }
  // 拿到参数的原型对象
  let proto = Object.getPrototypeOf(left);
  while (true) { // 循环往下寻找直到找到相同的原型对象
    if (proto === null) {
      return false;
    }
    // 找到相同原型对象返回true
    if (proto === right.prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
}

myInstanceof(new Number(2), Number);
myInstanceof(100, Number);

console.log(
  myInstanceof(new Number(2), Number),
myInstanceof(100, Number)
);



function getType(obj){
	let type = typeof(obj);
	// 先判断是否为基础数据类型，是直接返回
	if(type !== "object") {
		return type;
	}
  // 对于返回结果是object的，在进行下列判断返回正确结果
  return Object.prototype.toString.call(obj).replace(/^\[object(\S+)\]$/, '$1');;
}

console.log(getType([]));