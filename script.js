let buttons = document.getElementById('buttons');
let li = buttons.querySelectorAll('li');
let result = document.getElementById('result');
let equal = document.getElementById('equal');

li.forEach((currElem) => {
    // console.log(currElem);
    currElem.addEventListener('click', () => {
        if (result.innerHTML == '0') {
            result.innerHTML = '';
        } else {
            console.log('no zero');
        }
        if (currElem.innerHTML == '=') {
            result.innerHTML = eval(result.innerHTML);
        } else {
            result.innerHTML += currElem.innerHTML;
        }
        if (currElem.innerHTML == 'c') {
            result.innerHTML = '';
        }
    });

});