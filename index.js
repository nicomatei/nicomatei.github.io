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

// function hidePage() {
//   document.getElementById("home").style.display = "none";
// }

// function showHomePage() {
//   document.getElementById("languages").style.display = "none";
//   document.getElementById("projects").style.display = "none";
//   document.getElementById("skills").style.display = "none";
//   document.getElementById("home").style.display = "block";
// }

// function showSkillsPage() {
//   console.debug("show skills");
//   hidePage("home");
//   document.getElementById("projects").style.display = "none";
//   document.getElementById("languages").style.display = "none";
//   document.getElementById("skills").style.display = "block";
// }

// function showProjectsPage() {
//   hidePage();
//   document.getElementById("languages").style.display = "none";
//   document.getElementById("skills").style.display = "none";
//   document.getElementById("projects").style.display = "block";
// }

// function showLanguagesPage() {
//   document.getElementById("projects").style.display = "none";
//   document.getElementById("skills").style.display = "none";
//   hidePage();
//   document.getElementById("languages").style.display = "block";
// }

function hideAllPages() {
  hide("home");
  hide("skills");
  hide("projects");
  hide("languages");
}
var activePage = "home";

function showPage(nextPage) {
  hideAllPages();
  show(nextPage);
  console.warn("change", activePage, "to");
  document
    .querySelector(`a[data-page=${activePage}]`)
    .classList.remove("active");
  document.querySelector(`a[data-page=${nextPage}]`).classList.add("active");
  activePage = nextPage;
}

function hide(id) {
  document.getElementById(id).style.display = "none";
}
function show(id) {
  document.getElementById(id).style.display = "block";
}

function initEvents() {
  document
    .getElementById("top-menu-bar")
    .addEventListener("click", function (e) {
      if (e.target.matches("a")) {
        var id = e.target.getAttribute("data-page");
        // console.warn("click on menu", id);
        showPage(id);
      }
    });
}

showPage(activePage);
initEvents();
