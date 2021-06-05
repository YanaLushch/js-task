let disappearButton1 = document.querySelector(".disappear1");
let blackSquare1 = document.querySelector(".square1");
disappearButton1.addEventListener("click", () => {
  blackSquare1.style = "display: none;";
});
let disappearButton2 = document.querySelector(".disappear2");
let blackSquare2 = document.querySelector(".square2");
disappearButton2.addEventListener("click", () => {
  blackSquare2.remove();
});
let disappearButton3 = document.querySelector(".disappear3");
let blackSquare3 = document.querySelector(".square3");
disappearButton3.addEventListener("click", () => {
  blackSquare3.classList.add("hidden");
});
let toggleButton = document.querySelector(".toggle");
let blackSquare4 = document.querySelector(".square4");
toggleButton.addEventListener("click", () => {
  blackSquare4.classList.toggle("hidden");
});
//task 3
let toggleClassBtn = document.querySelector(".toggleClass");
let classSquares = document.querySelectorAll(".squareClass");
toggleClassBtn.addEventListener("click", () => {
  classSquares.forEach((element) => {
    element.classList.toggle("hidden");
  });
});
//task 4
let submitClassName = document.querySelector(".disappearOnSubmit");
submitClassName.addEventListener("click", () => {
  let inputClassName = document.querySelector(".getClassName").value;
  let elementsWithNeededClassName = document.querySelectorAll(
    `.${inputClassName}`
  );
  elementsWithNeededClassName.forEach((element) => {
    element.classList.toggle("hidden");
  });
});
//task 5
let yellowSquare = document.querySelector(".yellow-square");
let counter = 0;
yellowSquare.addEventListener("click", () => {
  if (counter == 0) {
    ++counter;
    alert("Hello");
  } else {
    yellowSquare.style.backgroundColor = "#ffffff";
  }
});
//task 6
let hoverBtn = document.querySelector(".hover-btn");
let redSquare = document.querySelector(".small-square");

hoverBtn.addEventListener("mouseover", () => {
  redSquare.style.backgroundColor = "#ffffff";
});
hoverBtn.addEventListener("mouseout", () => {
  redSquare.style.backgroundColor = "red";
});

//task 7
let focusInput = document.querySelector(".focus-input");
let rectangle = document.querySelector(".rectangle");

focusInput.addEventListener("focus", () => {
  rectangle.style.backgroundColor = "green";
});
focusInput.addEventListener("keydown", () => {
  rectangle.style.backgroundColor = "white";
});

//task 8
let linkBtn = document.querySelector(".link-btn");
let linkImage = document.querySelector(".link-img");

linkBtn.addEventListener("click", () => {
  linkImage.src = document.querySelector(".link-input").value;
});

//task 9
let linksBtn = document.querySelector(".links-btn");
let imagesDiv = document.querySelector(".images");

linksBtn.addEventListener("click", () => {
  const imagesLinks = document
    .querySelector(".links-textarea")
    .value.split("\n");
  imagesLinks.forEach((imageLink) => {
    let elementImg = document.createElement("img");
    elementImg.src = imageLink;
    imagesDiv.appendChild(elementImg);
  });
});

//task 10

let coordinates = document.querySelector(".xy");
document.body.addEventListener("mousemove", (event) => {
  coordinates.innerHTML = ` X: ${event.pageX} Y:${event.pageY}`;
});

//task 11
let userLang = navigator.language || navigator.userLanguage;
let language = document.querySelector(".language");
language.innerHTML = `Your language: ${userLang}`;

//task 12
let geoLocation = document.querySelector(".geolocation");
function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  geoLocation.innerHTML = `Your geolocation: Latitude: ${latitude}, Longtitude: ${longitude}`;
}
function error() {
  status.geoLocation = "Unavailable to receive your current location";
}
if (!navigator.geolocation) {
  geoLocation.textContent = 'Your browser doesn"t support geolocation';
} else {
  navigator.geolocation.getCurrentPosition(success, error);
}

//task 13
let block1 = document.querySelector(".block1");
block1.addEventListener("blur", () => {
  window.localStorage.setItem("block1", block1.textContent);
});
block1.innerHTML = window.localStorage.getItem("block1");
let block2 = document.querySelector(".block2");
block2.addEventListener("blur", () => {
  document.cookie = `block2=${block2.textContent}`;
});
let cookieValue = document.cookie.replace(
  /(?:(?:^|.*;\s*)block2\s*\=\s*([^;]*).*$)|^.*$/,
  "$1"
);
block2.innerHTML = cookieValue;
let block3 = document.querySelector(".block3");
block3.addEventListener("blur", () => {
  window.sessionStorage.setItem("block3", block3.textContent);
});
block3.innerHTML = window.sessionStorage.getItem("block3");
// task 14
let scrollTopBtn = document.querySelector(".bottom-btn");
window.addEventListener("scroll", () => {
  if (document.body.scrollHeight - innerHeight <= scrollY) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.add("hidden");
  }
});
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//task 15
let outsideDiv = document.querySelector(".outside-div");
let insideDiv = document.querySelector(".inside-div");
outsideDiv.addEventListener("click", () => {
  alert("I am the outside div");
});
insideDiv.addEventListener("click", (event) => {
  alert("I am the inside div");
  event.stopPropagation();
});

//task 16
let blockBtn = document.querySelector(".block-btn");
let blockSquare = document.querySelector(".gray-square");
blockBtn.addEventListener("click", () => {
  blockSquare.classList.add("block-square");
  document.body.style.overflow = "hidden";
});
blockSquare.addEventListener("click", () => {
  blockSquare.classList.remove("block-square");
});

//task 18
let dropBlock = document.querySelector(".drag-drop");
dropBlock.addEventListener("dragover", (event) => {
  event.preventDefault();
});
dropBlock.addEventListener("dragenter", (event) => {
  event.target.classList.add("drag-enter");
  event.target.innerHTML = "Yes, yes, here!!";
});
dropBlock.addEventListener("dragleave", (event) => {
  event.target.classList.remove("drag-enter");
  event.target.innerHTML = "Heeey. I am here. Drag the file here";
});
dropBlock.addEventListener("drop", (event) => {
  event.preventDefault();
  event.target.innerHTML = "YES!! Success. Thanks";
});
