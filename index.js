// Task 1. Скрыть элемент по нажатию кнопки

const myButton = document.querySelector('button');
const myText = document.querySelector('div');

const removeText = () => {
    // myText.style.display = "none";
    myText.remove();
    myButton.removeEventListener('click', removeText);
}; 
myButton.addEventListener('click', removeText)

// // Task 2. Какой обработчик запустится?

const myButton2 = document.querySelectorAll('button')[1];

myButton2.addEventListener("click", () => alert("1"));
myButton2.removeEventListener("click", () => alert("1"));
myButton2.onclick = () => alert(2);


// Answer:

/* Бұл жерде біз removeEventListener-де жаңа функция береміз.
Егер addEventListener арқылы жасаған Event-ті өшіргіміз келсе,
ол орындайтын функция сақталуы керек.

const myFunc = () => {};
myButton2.addEventListener("click", myFunc);
myButton2.removeEventListener("click", myFunc);

onclick EventListener-ден бөлек орындалады, олардың арасында байланыс жоқ.

*/

// Task 3. Добавить кнопку закрытия

const removeTextButttons = document.querySelectorAll('.block-of-text button');
const blockOfTexts = document.querySelectorAll('.block-of-text');

const removeDiv1 = () => {
    blockOfTexts[0].style.display = "none";
    removeTextButttons[0].removeEventListener('click', removeDiv1);
};
removeTextButttons[0].addEventListener('click', removeDiv1);

const removeDiv2 = () => {
    blockOfTexts[1].style.display = "none";
    removeTextButttons[1].removeEventListener('click', removeDiv2);
};
removeTextButttons[1].addEventListener('click', removeDiv2);

const removeDiv3 = () => {
    blockOfTexts[2].style.display = "none";
    removeTextButttons[2].removeEventListener('click', removeDiv3);
};
removeTextButttons[2].addEventListener('click', removeDiv3);

