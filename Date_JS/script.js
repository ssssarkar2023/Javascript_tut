//new Date

//new Date() gives system date and time.

// let x = new Date();
// console.log(x);

//toLocaleDateString:-d/m/yy
// let x = new Date();
// let y = x.toLocaleDateString();
// console.log(x);
// console.log(y);

// //toLocaleTimeString-h:m:s /AM/PM
// let x = new Date();
// let y = x.toLocaleTimeString();
// console.log(x);
// console.log(y);

//get Time
// no of milliseconds since 1/1/1970 12:AM
//1000 millisec=1sec
//1000*60=1min
//1000*60*60=60 min=1 hour
//1000*60*60*24=1 day
//1000*60*60*24*365=1year

// let x = new Date();
// let y = x.getTime();
// console.log(x);
// console.log(y);

//getDay()
//returns day of week
// 0 - Sunday to 6 - Saturday

// let x = new Date();
// let y = x.getDay();
// let z=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"];
// console.log(y);
// console.log(z[y]);

//getDate,getMonth -(0-11),getYear

// let x = new Date();
// let y = x.getDate();
// let z = x.getMonth() + 1;
// let year = x.getFullYear();

// console.log(y);
// console.log(z);
// console.log(year);

// let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// let month = x.getMonth();
// console.log(months[month]);


//Custom Date - 25/6/2019

// let x = new Date();

// let y = x.setFullYear(2019);

// let z = x.setMonth(5);

// let d = x.setDate(25);

// console.log(x.toLocaleDateString());