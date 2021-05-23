let disappearButton1 = document.querySelector(".disappear1");
let blackSquare1 = document.querySelector(".square1");
disappearButton1.addEventListener( "click",() => {
    blackSquare1.style = "display: none;"
});
let disappearButton2 = document.querySelector(".disappear2")
let blackSquare2 = document.querySelector(".square2");
disappearButton2.addEventListener( "click",() => {
    blackSquare2.remove();
});
let disappearButton3 = document.querySelector(".disappear3")
let blackSquare3 = document.querySelector(".square3");
disappearButton3.addEventListener( "click",() => {
    blackSquare3.classList.add("hidden");
});
let toggleButton = document.querySelector(".toggle")
let blackSquare4 = document.querySelector(".square4");
toggleButton.addEventListener( "click",() => {
    blackSquare4.classList.toggle("hidden");
});
let toggleClassBtn = document.querySelector(".toggleClass");
let classSquares = document.querySelectorAll(".squareClass");
toggleClassBtn.addEventListener( "click",() => {
    classSquares.forEach(element => {
        element.classList.toggle("hidden");
    });
});
let submitClassName = document.querySelector(".disappearOnSubmit");
submitClassName.addEventListener("click", () => {
    let inputClassName = document.querySelector(".getClassName").value;
    let elementsWithNeededClassName = document.querySelectorAll(`.${inputClassName}`);
    elementsWithNeededClassName.forEach(element => {
        element.classList.toggle("hidden");
    });
})
let yellowSquare = document.querySelector('.yellow-square');
yellowSquare.addEventListener("click", () => {
    
})