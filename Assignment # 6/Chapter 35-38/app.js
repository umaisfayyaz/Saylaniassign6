// Task 1
// function date() {
//     var a = new Date();
//     document.write(a);
// }
// date();
// Task 2
// function fullName() {
//     var a = prompt("Enter your first name");
//     var b = prompt("Enter your last name");
//     document.write("Hello " + a + b);
// }
// fullName();
// Task 3
// function add(a, b) {
//     var a = +prompt("Enter first number");
//     var b = +prompt("Enter second number");
//     var c = a + b;
//     return c;
// }
// var g = add();
// document.write(g);
// Task 4
// function sum(a, b, c) {
//     var a = +prompt("Enter firt number");
//     var b = prompt("Enter operator (+,-,/,*");
//     var c = +prompt("Enter second number");
//     if (b === "+") {
//         return a + c;
//     } else if (b === "-") {
//         return a - c
//     } else if (b === "/") {
//         return a / c
//     } else if (b === "*") {
//         return a * c
//     } else {
//         return "Incorrect Operator"
//     }
// }
// var calc = sum();
// document.write(calc);
// Task 5
// function square() {
//     var a = +prompt("Enter a number here");
//     return a * a;
// }
// var g = square();
// document.write(g);
// Task 6
// function factorial() {
//     var i;
//     var a = +prompt("Enter a number here")
//     for (i = 1; i <= a; i++) {
//         a = a * i;
//     }
//     document.write(a)
// }
// factorial();
// Task 7
// function count(a, b) {
// var a = +prompt("Enter first number");
// var b = +prompt("Enter second number");
//     for (a = 0; a <= b; a++) {
//         document.write(a + "<br>");
//     }
// }
// count();
// Task 8
// function calculateHypotenus() {
//     var a = +prompt("Enter Hyp");

//     function calculateSquare() {
//         var b = +prompt("Enter Base");
//         var c = +prompt("Enter Perp");
//         document.write(a * a + b * b + "<br>" + c * c);
//     }
// }
// document.write(calculateHypotenus() + "<br>" + calculateSquare);
// Task 9
// function rec(a, b) {
//     return a * b;
// }
// var a = rec(3, 4);
// document.write(a + "<br>");
// Task 9
// var height = 9
// function area (height,width) {
// 	return height * width;
// }

// document.write("The area of your rectangle is " + area(height,width=9));
// Task 10
// var a=prompt("Enter any word to check")
// var check=""
// function palindrome(){
// 	for(var i=a.length-1;i>=0;i--){
// 		check+=a[i]
// 	}
// 	if (check===a) {
// 		return a
// 	}
// }
// document.write(palindrome()+" is a palindrome word.")
// Task 11
// var a="the quick brown fox"
// function uppercase(){
// 	var b=a.split(" ")
// 	for(var i=0,x=b.length;i<x;i++){
// 		b[i]=b[i][0].toUpperCase()+b[i].substr(1)
// 	}
// 	return b.join(" ")
// }
// document.write("EXAMPLE STRING :"+a+"<br>EXPECTED OUTPUT :"+uppercase(a))
// Task 12
// function longword(a)
// {
//   var b = a.match(/\w[a-z]{0,}/gi);
//   var c = b[0];

//   for(var i = 1 ; i < b.length ; i++)
//   {
//     if(c.length < b[i].length)
//     {
//     c = b[i];
//     } 
//   }
//   return c;
// }
// document.write("Longest word:"+longword('Saylani Welfare Trust'));
// Task 13
// function calcoccu(a,b){
// 	var lettercount=0
// 	for(var i=0;i<a.length;i++){
// 		if (a.charAt(i)===b){
// 			lettercount+=1
// 		}
// 	}
// 	return lettercount;
// }
// document.write("The letter occured in the string "+calcoccu('JavaScript','a')+" times.")
// Task 14
// function calcCircumference(radius=3){
// 	return 2*3.14*(radius)
// }
// document.write("The circumference is "+calcCircumference()+"<br>")
// function calcArea(radius=5){
// 	return 3.14*(radius*radius)
// }
// document.write("The area is "+calcArea())