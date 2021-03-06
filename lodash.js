
let _ = require('lodash');

//_.chunk will spilt in part given as size
// console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
// // => [['a', 'b'], ['c', 'd']]

//_.compact  => removes falsy values
 
// console.log(_.compact([0, 1, false, 2, '', 3]));
// => [1, 2, 3]

// _.concat  will merge multiple array and values 
// var array=[1];
// var other=_.concat(array,2,7,[3,4],[[4]]);
// console.log(other);


// _.difference will return unique valued array of inspected array 
// console.log(_.difference([2, 1], [2, 3]))
// => [1]

// _.differenceWith
// var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 
// console.log(_.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual));
// // => [{ 'x': 2, 'y': 1 }]


// _.differenceBy
// console.log(_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'));
// => [{ 'x': 2 }]

// _.drop will return an array with remaining elements of sliced elememnts;

// console.log(_.drop([1, 2, 3]));
// // => [2, 3]
 
// console.log(_.drop([1, 2, 3], 2))
// // => [3]
 
// console.log(_.drop([1, 2, 3], 5))
// // => []
 
// console.log(_.drop([1, 2, 3], 0))
// // => [1, 2, 3]


// .dropRight
// _.dropRightWhile


// _.fill will return new arrya with the replaced value of in gievn data last in excluded 
// var array = [1, 2, 3];
 
// _.fill(array, 'a');
// console.log(array);
// // => ['a', 'a', 'a']
 
// console.log(_.fill(Array(3), 2))


// // => [2, 2, 2]
 
// console.log(_.fill([4, 6, 8, 10], '*', 1, 3))

// => [4, '*', '*', 10]

// _.findIndex
// _.findLastIndex

//_.head return the first element of an array

//_.index of
// console.log(_.indexOf([1, 2, 1, 2], 2))
// // => 1
 
// // Search from the `fromIndex`.
// console.log(_.indexOf([1, 2, 1, 2], 2, 2))
// => 3

//_initial
// console.log(_.initial([1, 2, 3]))
// => [1, 2]

//_.intersection will return an array of common elemnt in arrys
// _.intersection([2, 1], [2, 3]);
// => [2]


//_.join coverts all elemens of arrya in sytings in separated with given value
// console.log(_.join(['a', 'b', 'c'], '~'))
// // => 'a~b~c'

// _.last will return last elemnts of an array 
// console.log(_.last([1, 2, 3]))
// => 3

// _.pull remove the elemnts from an array 
// var array = ['a', 'b', 'c', 'd' ,'a', 'b', 'c'];
 
// _.pull(array, 'a', 'c');
// console.log(array);
// => ['b', 'b']

// var array = ['a', 'b', 'c', 'd'];
// var pulled = _.pullAt(array, [1, 3]);
 
// console.log(array);
// // => ['a', 'c']
 
// console.log(pulled);
// // => ['b', 'd']


//_.remove


// var array = [1, 2, 3, 4];
// var evens = _.remove(array, function(n) {
//   return n % 2 == 0;
// });
 
// console.log(array);
// // => [1, 3]
 
// console.log(evens);
// // => [2, 4]

//.reverse
// var array = [1, 2, 3];
 
// _.reverse(array);
// // => [3, 2, 1]
 
// console.log(array);
// // => [3, 2, 1]


//.slice

// var arr = [1,5,7,9,8,7,90];
// console.log(_.slice(arr , 1, 3)); //3 not including


//_.take will retrned sliced eklement stsrted from thevgiven no
// _.take([1, 2, 3]);
// // => [1]
 
// _.take([1, 2, 3], 2);
// // => [1, 2]
 
// _.take([1, 2, 3], 5);
// // => [1, 2, 3]
 
// _.take([1, 2, 3], 0);
// // => []

//_.unioun
// _.union([2], [1, 2]);
// // => [2, 1]

// _.uniq
// _.uniq([2, 1, 2]);
// => [2, 1]


// _.forEach
// _.forEach([1, 2], function(value) {
//     console.log(value);
//   });
//   // => Logs `1` then `2`.
   
//   _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
//     console.log(key);
//   });

//_.includes
// _.includes([1, 2, 3], 1);
// // => true
 
// _.includes([1, 2, 3], 1, 2);
// // => false
 
// _.includes({ 'a': 1, 'b': 2 }, 1);
// // => true
 
// _.includes('abcd', 'bc');
// // => true


//_orderBy
// var users = [
//     { 'user': 'fred',   'age': 48 },
//     { 'user': 'barney', 'age': 34 },
//     { 'user': 'fred',   'age': 40 },
//     { 'user': 'barney', 'age': 36 }
//   ];
   
//   // Sort by `user` in ascending order and by `age` in descending order.
//   _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
  // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]


  //_.some Returns true if any element passes the predicate check, else false.

//   _.some([null, 0, 'yes', false], Boolean);
// // => true
 
// var users = [
//   { 'user': 'barney', 'active': true },
//   { 'user': 'fred',   'active': false }
// ];
 
// // The `_.matches` iteratee shorthand.
// _.some(users, { 'user': 'barney', 'active': false });
// // => false
 
// // The `_.matchesProperty` iteratee shorthand.
// _.some(users, ['active', false]);
// // => true
 
// // The `_.property` iteratee shorthand.
// _.some(users, 'active');
// // => true



// console.log(_.chunk(['a', 'b', 'c', 'd'], 3));
// => [['a', 'b', 'c'], ['d']]

// var users = [
//     { 'user': 'barney', 'age': 36, 'active': true },
//     { 'user': 'fred',   'age': 40, 'active': false }
//   ];
   
// //   const result = _.filter(users, function(user) { return !user.active; });
// // const result = _.filter(users, { 'age': 36, 'active': true });
// const result = _.filter(users, 'active');;

//   console.log(result);


// const arr = [3,65,78,4,5];
// const result = _.sum(arr);
// console.log(result)

// const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
 
// const result = _.sumBy(objects, function(o) { return o.n; });
// console.log(result)

// const result = _.sumBy(objects, 'n');
// console.log(result)


// console.log(_.isEmpty(null))

 
// console.log(_.isEmpty(true))

 
// console.log(_.isEmpty(1))

 
// console.log(_.isEmpty([1, 2, 3]))

 
// console.log(_.isEmpty({ 'a': 1 }))

// _find. will return only first matching result

// let arr = [{name:'shubham' , age:18 , actice:true} , {name:'amit' , age:18 , actice:true}, {name:'abc' , age:18 , actice:false}]
// // const result = _.find(arr , function(obj){return  obj.actice})
// const result = _.find(arr , 'actice')
// console.log(result)



// _.map
// function square(n) {
//     return n * n;
//   }
   
//   const result = _.map([4, 8], square);
// console.log(result)
   
//   const result =_.map({ 'a': 4, 'b': 8 }, square);

//   console.log(result)
//   var users = [
//     { 'user': 'barney' },
//     { 'user': 'fred' }
//   ];

   
//   const result = _.map(users, 'user');
//   console.log(result)


//round

// var x = _.round(4.0006);
// var x = _.round(4.0006, 3);
// console.log(x)


//_.nill will give us true if its nulll or undefined

// const res = _.isNil(2)
// const res = _.isNil(null)
// console.log(res)

// _.isNull only true for null value else false

// const res = _.isNull(null)
// const res = _.isNull(undefined)
// console.log(res)

// _.toLower will convert in lower case

// const str = _.toLower('Shubham GUpta');
// console.log(str)


  //_.pick will return new property based on given 


//   var object = { 'a': 1, 'b': '2', 'c': 3 };
 
// console.log(_.pick(object, ['a', 'c']))

// _.clone  will do shallow clone _.cloneDeep will do deep copy

// var obj = {a:1 , b:1};
// var obj1  = _.clone(obj);
// obj.a=6;
// console.log(obj1.a)
// console.log(obj)
// console.log(obj1)
// console.log(obj1)
// console.log(obj==obj1)
// var obj2 = _.cloneDeep(obj);
// console.log(obj===obj2)

// var obj = [{a:1 , b:2} , {c:3 , d:4}];
// var obj1 = _.clone(obj);
// console.log(obj[0]===obj1[0]);

//_.groupBy

// console.log(_.groupBy([6.1, 4.2, 6.3], Math.floor))
// // => { '4': [4.2], '6': [6.1, 6.3] }
 
// // The `_.property` iteratee shorthand.
// console.log(_.groupBy(['one', 'two', 'three'], 'length'))
// => { '3': ['one', 'two'], '5': ['three'] }


//_.reduce

// console.log(_.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
//     (result[value] || (result[value] = [])).push(key);
//     return result;
//   }, {}))

// _.reject opposite to filter


// _.debounce  it will invoke a function after a certain amount of time since the last time it was invoked.


// function validateEmail() {
//     // Validate email here and show error message if not valid
// }

// var emailInput = document.getElementById("email-field");
// emailInput.addEventListener("keyup", _.debounce(validateEmail, 500));


//_.times  _.times receives as arguments the number of iterations and a function to execute n 
//times and returns an array of the results. Very useful when creating dynamic test data.

// function getRandomInteger() {
//     return Math.round(Math.random() * 100);
// }

// var result = _.times(5, getRandomNumber);
// result => [64, 70, 29, 10, 23]

// _.keyBy _.keyBy is one of my favorites. It helps a lot when trying to get an object with a specific property. 
// Let’s say we have 100 blog posts and we want to get the post with Id “34abc”.
// var posts = [
//     { id: "1abc", title: "First blog post", content: "..." },
//     { id: "2abc", title: "Second blog post", content: "..." },
//     // more blog posts
//     { id: "34abc", title: "The blog post we want", content: "..." }
//     // even more blog posts
// ];

// posts = _.keyBy(posts, "id");

// var post = posts["34abc"]
// // post -> { id: "34abc", title: "The blog post we want", content: "..." }

// const arr = [1,1,1,1,4,5,6,7,9,8];
// let objArr = [{id:1,name:'xyz'} , {id:1,name:'xyz'} , {id:1,name:'xyz'}]

// // console.log(_.uniq(arr))
// const res = _.sortedUniqBy(objArr ,(a)=>{
//     return a.id
// })
// console.log(res)

// let posts = [

//   { id: 1, title: "Dummy First blog post"},
  
//   { id:2, title: " DummySecond blog post"},
  
//   { id: 3, title: "Dunny third blog post" }
  
//   ];
  
//   posts = _.keyBy(posts, "id");
  
//   let post = posts[1]
//   console.log(post)

// let arr=[1,2,3];
// console.log(_.drop(arr));
// console.log(arr)

// var array = [1, 2, 3, 4];
// var res = _.find(array , (x)=>{
//   return x%2==0;
// })
// console.log(res)
// console.log(array)


// var obj = {
//   name:'shu',
//   age:22,
//   sta:1
// }

// var aarr = [1 , 10 ,3,4 ,5]
// var str = 'shubham'
// for(let i of str) {
//   console.log(i)
// }

// let regex = /s*/; 
//  let str = 'shubhamgfgfgf';
//   let result = regex.test(str)
//   console.log(result)


// let regex = /harrsdfgy/;
// // Lets look into some metacharacter symbols
// regex = /^harrdc/; // ^ means expression will match if string starts with
// regex = /harry$/; // $ at the end of the string means "string ends with"
// regex = /h.rry/; //matches any one character
// regex = /h*rry/; //matches any 0 or more characters
// regex = /ha?rryi?t/; //? after character means that character is optional
// regex = /h\*rry/

// let str = "h*rry means codewith"; // 

// let result = regex.exec(str);
// console.log("The result from exec is ", result);

// if(regex.test(str)){
//     console.log(`The string ${str} matches the expression ${regex.source}`);
// }
// else{
//     console.log(`The string ${str} does not match the expression ${regex.source}`);
// }

// let regex = /\war/;     //word character - _ or alphabet or numbers
// regex = /\w+d1r/;       // \w+ means one or more word characters
// regex = /\Wbhai/;       // Non word character
// regex = /\W+bhai/;      // \W+ means more than one Non word character
// regex = /number \d999/; // \d means digit
// regex = /number \d+/;   // \d+ means more than one digit
// regex = /\D999/;        // \D means non digit
// regex = /\D+999/;       // \D+ means more than one non digit
// regex = /\ska number/;  // Match whitespace character
// regex = /\s+ka number/; // \s+ means match one or more than one whitespace characters
// regex = /\Ska number/;  // Match non whitespace character
// regex = /\S+ka number/; // Match one or more than one non whitespace character
// regex = /4r5r\b/;  // word boundary

// // Assertions
// regex = /h(?=y)/;
// regex = /h(?!y)/;
// str = "harh7rd1r4r5ry%%$@bhai hdrryika number 899999harry9999";



// let result = regex.exec(str);
// console.log("The result from exec is ", result);

// if(regex.test(str)){
//     console.log(`The string ${str} matches the expression ${regex.source}`);
// }
// else{
//     console.log(`The string ${str} does not match the expression ${regex.source}`);
// }



// console.log( _.map(['6', '8', '10'], _.ary(parseInt, 1)))

// let res = _.after(3 , ()=>{
//   console.log("Function called");
// })
// res();
// res();
// res();

// let res = _.before(3 , ()=>{
//   console.log("Function called");
// })
// res();
// res();
// res();

// var obj ={ 
//     Company: 'Real11', 
//     Address: 'Noida', 
//     Contact: '+91 96687787687' 
//   }
// var fun = function() { 
//   return 'Company Name : ' + this.Company 
//       + '\nAddress : ' + this.Address 
//       + '\nContact : ' + this.Contact 
// }; 

// var func = _.bind(fun,obj ); 
  
// console.log(func());



// var obj = {
//   'author': 'Nidhi',
//   'welcome': function(greet, mark) {
//     return greet + ' ' + this.author + mark;
//   }
// };
// var bound_fun = _.bindKey(obj, 'welcome', 'Hello' , 52);
  
// bound_fun();

// var debounce_fun = _.debounce(function () {
//   console.log('Function debounced after 1000ms!');
//   }, 10000);
  
// debounce_fun();


// Requiring lodash library
// const _ = require('lodash');
  
// Using the _.delay() method
// with its parameter
// _.delay(function(content) {
//     console.log(content);
//   }, 3000, 'GeeksforGeeks!');
  
// Print the content after this line
// console.log('Content:');

// var object = { 'cpp': 5, 'java': 8 };
  
// // Use of _.memoize() method  
// var values = _.memoize(_.values);
  
// // value of object 
// console.log(values(object)); 
  
// // Modify the result cache.
// values.cache.set(object, ['html', 'css']);
// console.log(values(object));
// console.log(object)

// var hold = _.once(function(trap){
//   console.log(trap + '!');
// });
 
// // Calling hold multiple times
// hold('Logged in to the console');
// hold('GfG');
// hold('CS');


// var users = (['q', 'r', 't', 'u']);
  
// // Using the _.flatMapDepth() method
// let flat_map = _.flatMapDepth(users, duplicate, 2)
// function duplicate(n) {
//   return [[[n, n]]];
// }
  
// // Printing the output 
// console.log(flat_map);