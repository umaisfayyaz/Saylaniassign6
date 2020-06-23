// Task 1
// var a = new Date();
// document.write(a);
// Task 2
// var a = new Date();
// var b = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// alert(b[a.getMonth()]);
// Task 3
// var a = new Date();
// var b = a.toString();
// var c = b.slice(0, 3);
// alert(c);
// Task 4
// var a = new Date().getDay();
// if (a == 0 || a == 6) {
//     document.write('its Fun day')
// }
// Task 5
// var a = new Date().getMonth();
// if (a <= 15) {
//     document.write('its frst day');
// } else {
//     document.write('its last days')
// }
// Task 6
// var a = new Date("Jan 1, 1970");
// var b = a.getTime();
// var today = new Date();
// var todayMil = today.getTime();
// var diff = todayMil - b;
// document.write(today + "<br>" + diff + "<br>" + diff / 60);
// Task 7
// var a = new Date();
// var b = a.getHours();
// if (b < 12) {
//     alert("it's am");
// } else {
//     alert("it's pm");
// }
// Task 8
// var a = new Date("Dec 31,2020");
// var b = a.getFullYear();
// var c = a.getDay();
// alert(b + " " + c);
// Task 9
// var a = new Date("June 18, 2015");
// var b = a.getTime();
// var c = new Date();
// var d = c.getTime();
// var e = d - b;
// var f = e / (1000 * 60 * 600 * 24);
// var g = Math.floor(f)
// document.write(g);
// Task 11
// var a = new Date();
// var b = a.setHours(1);
// document.write(a + "<br>");
// Task 12
// var a = new Date();
// var b = new Date("June 21, 1971 01:15:00");
// document.write(b);
// Task 13
// var a = prompt("Enter your Birthdate Format (1 Jan, 1992");
// var b = new Date(a);
// var c = b.getTime();
// var d = new Date();
// var e = d.getTime();
// var f = e - c;
// var g = f / (1000 * 60 * 60 * 24 * 30 * 12);
// var h = Math.floor(g);
// document.write("Your age is " + h + "<br>" + "Your birthdate is " + a);
// Task 14
// var a = prompt("Enter your name");
// var date = new Date();
// var b = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var forMonth = b[date.getMonth()];
// var unit = 410;
// var unitCharges = 16;
// var beforAmount = unit * unitCharges;
// var latePayment = 350;
// var afterAmount = beforAmount + latePayment;

// if (a === "Umais") {
//     document.write("<h1>Your Bill</h1>" + "Customer Name: " + a + "<br>" + "Month: " + forMonth + "<br>" + "Number of units: " + unit + "<br>" + "Charges per unit: " + unitCharges + "<br>" +
//         "Net Amount Payable (within Due Date): " + beforAmount + "<br>" + "Late Payment Surcharge: " + latePayment + "<br>" + "Net Amount Payable (within Due Date): " + afterAmount)
// }