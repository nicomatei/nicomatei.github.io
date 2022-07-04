// console.info(2);
// console.debug(23 + 2);
// console.warn(6 * 3 - 10);
// console.error("started");
//
var myName = "Nicoleta";
var age = 10;
// console.info("My name is " + myName + ", I'm " + age + " years old.");
var age = 11;
// console.info("My name is " + myName + ", I'm " + age + " years old.");
var age = 12;
// console.info("My name is " + myName + ", I'm " + age + " years old.");

var jobTitle = "<span>Student @</span> FastTrackIT";
var mottoElement = document.getElementById("motto");

console.info(mottoElement);
console.warn(mottoElement.innerHTML);

mottoElement.innerHTML = mottoElement.innerHTML + " & " + jobTitle;
