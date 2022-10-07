/* String */

// var age = 30;
// var str = 'I am a ' + age + ' year-old engineer.';
// console.log(str);

// var age = 30;
// var str = `I am a ${age} year-old engineer.`;
// console.log(str);

// var a = 5;
// var b = 10;

// console.log(`Fifteen is ${a+b} and not ${2 * a + b}.`);


/* Number */
// var a = 10;
// var b = 12.34;

// console.log(typeof a);
// console.log(typeof b);

/* Object */

// var person = new Object();
// person.name = 'Kuro';
// person.job = 'Front-end developer';
// person.sayName = function(){
//   alert( this.name) ;
// };

// person.sayName();

// var person = {
//   name: 'Kuro',
//   job: 'Front-end developer',
//   sayName: function(){
//     alert( this.name ) ;
//   },
// }

// console.log(person.name);
// person.sayName();

// var person = {
//   name: 'Kuro',
//   job: 'Front-end developer',
//   sayName: function(){
//     alert( this.name ) ;
//   },
// }
// console.log(person["name"]);
// person["sayName"]();

/* 屬性新增 */
// var obj = { };
// obj.name = 'Object';

// console.log(obj.name);

/* 屬性刪除 */
// var obj = { };
// obj.name = 'Object';
// console.log(obj.name);

// delete obj.name;

// console.log(obj.name);

/* 判斷屬性是否存在 */
//透過in檢查
// var obj = {
//   name: 'Object',
//  };
// console.log( 'name' in obj);
// console.log( 'value' in obj);

//透過hasOwnProperty()方法檢查
// console.log(obj.hasOwnProperty('name'));
// console.log(obj.hasOwnProperty('value'));

/* 陣列 Array */

// var a = new Array();
// a[0] = "apple";
// a[1] = "boy";
// a[2] = "cat";

// console.log(a.length);

// var a = ["apple", "boy", "cat"];

// console.log(a.length);

// a.length = 1;
// console.log(a);

// a.length = 3;
// console.log(a);



//陣列不一定要連續指定
// var array = ["a", "b", "c"];

// console.log(array.length);

// array[7]='z';

// console.log(array);

//陣列新增元素

// var a = ["apple", "boy", "cat"];

// a.push("dog");
// a.push('d');

// console.log(a);

//判斷是否為陣列

console.log(typeof []);
// var a = ["apple", "boy", "cat"];
// console.log(typeof []);













