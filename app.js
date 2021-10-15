console.log(`I'm working`);

//select a button
const btn = document.querySelector('#click-me');
console.log(btn);

//add an event handler to the button
btn.onclick = function () {

    //set the value of checked to be false
    let checked = false;

    //if button has class far fa-circle,
    if (checked) {
        //remove the unchecked circle,
        btn.classList.remove('fas', 'fa-check-circle');
        //and show the full circle
        btn.classList.add('far', 'fa-circle');
    } else {
        //otherwise vice-versa
        //if the button is not checked and is true
        btn.classList.add('fas', 'fa-check-circle');
        btn.classList.remove('far', 'fa-circle');
    }
    checked = !checked;
};
