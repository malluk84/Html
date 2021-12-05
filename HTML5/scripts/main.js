// console.log("Hello world!");

// obiekt document reprezentuje całe drzewo HTML w JS
// console.log(document);

// ES6
// let - zmienna, którą możemy nadpisać
// const - stała


// JIT
// hoisting
// console.log(addTwoNumbers(1, 2));

function addTwoNumbers(a, b) {
    return a + b;
}

// temporary dead zone
// console.log(number);
// let number = 1;

// przypisanie headera do zmiennej
const headerContainer = document.querySelector(".topHeader");
// const headerContainer = document.getElementById();
// const headerContainer = document.getElementsByClassName();
// const headerContainer = document.getElementsByName();

// headerContainer.innerHTML = "<p>test</p>";

// "pobieramy" kontener "main" (<main>) do zmiennej
const mainContainer = document.querySelector("main");

document.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        headerContainer.classList.add("headerFixed");
        mainContainer.classList.add("mainMarginTop");
    } else {
        headerContainer.classList.remove("headerFixed");
        mainContainer.classList.remove("mainMarginTop");
    }
}

// JS
// musimy wybrać kontener znacznika "main"

// CSS
// musimy stworzyć dwie klasy - jedną dla headera (która nada position fixed etc)
// drugą dla maina, która doda margin-top: 100px


// EVENTY
const form = document.querySelector("#contactForm");

// nasłuchujemy na event "submit" na formularzu
form.addEventListener('submit', (event) => {
    event.preventDefault(); // wyłączenie domyślnego zachowania eventu - w tym przypadku wysyłki

    let isFormValid = false;

    // walidacja
    // ....

    // event.target[0].value - wartość pierwszego inputa w naszym formularzu
    console.log(event.target[0].value);

    if (isFormValid) event.submit();
});