'use strict';

const todos = [
    'Wash the dishes',
    'Clean the gutters',
    'Mow the yard',
    'Do some coding',
    'Rake the leaves',
];

// Declare your two immutable variables
let shiftValue;
let popValue;

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const answerOneEl = document.getElementById('answer-one');
const answerTwoEl = document.getElementById('answer-two');
const answerThreeEl = document.getElementById('answer-three');
const answerFourEl = document.getElementById('answer-four');
const answerFiveEl = document.getElementById('answer-five');
const answerSixEl = document.getElementById('answer-six');
const submissionBtn = document.getElementById('submission-btn');

function updateAnswerOne() {
    answerOneEl.innerHTML = todos;
}

function updateAnswerTwo() {
    answerTwoEl.innerHTML = todos[2];
}

function removeLastValue() {
    popValue = [];
    const stored = todos.pop();
    popValue.push(stored);

    /*
        // After some refactoring:
        popValue = [todos.pop()];
    */
}

function updateAnswerFour() {
    answerFourEl.innerHTML = todos;
}

function reverseTodoList() {
    todos.reverse();
}

function updateAnswerFive() {
    answerFiveEl.innerHTML = todos;
}

function removeFirstValue() {
    shiftValue = [];
    const stored = todos.shift();
    shiftValue.push(stored);

    /*
        // After some refactoring:
        shiftValue = [todos.shift()];
    */
}

// Expected is wrong?
function addShiftAndPopValues() {
    todos.push(popValue);
    todos.push(shiftValue);

    // This matches the expected?
    // todos.push(popValue);
    // todos.push(shiftValue);
}


function updateAnswerSix() {
    answerSixEl.innerHTML = todos;

    // Learned about join. That would be nice if I needed a space after the comma.
    // answerSixEl.innerHTML = todos.join(', ');
}

function render() {
    updateAnswerOne();
    updateAnswerTwo();
    removeLastValue();
    updateAnswerFour();
    reverseTodoList();
    updateAnswerFive();
    removeFirstValue();
    addShiftAndPopValues();
    updateAnswerSix();
}

submissionBtn.addEventListener('click', function () {
    // Update this function
    render();
});
