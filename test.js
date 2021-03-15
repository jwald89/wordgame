let wordIndex = 0;
let correct = 0;
let wrong = 0;
let words = "lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
let splitWord = words.split(" ");

let currentWord = document.querySelector('#currentWord');

document.querySelector('p').innerHTML = words;


let elementHasValue = (element) => element.value.length !== 0;

currentWord.value = splitWord[wordIndex];

document.querySelector('#inputBox').addEventListener('keyup', (e) => {

    let inputBox = e.target;

    if(currentWord.value.includes(inputBox.value) && elementHasValue(inputBox)) {
        let newValue = `<mark>${inputBox.value}</mark>${currentWord.value.substring(inputBox.value.length,  currentWord.value.length)}`;

        splitWord[wordIndex] = newValue;

        document.querySelector('p').innerHTML = splitWord.join(' ');
    }
  

    if(e.code == 'Space') {
        // Get the word index.

        inputValue = e.target.value.trim();

        if(inputValue == currentWord.value){

            // document.querySelector('p').innerHTML = `<mark>${splitWord[wordIndex]}</mark>${words}`;
            correct++;
        
            
        } else {

            if(wrong === 4) {
                document.querySelector('#wrong').innerHTML = `Wrong :  ${wrong + 1}`;
                document.querySelector('#word').innerHTML = `<h1 style="color: red; text-decoration: underline;"><center>GAME OVER!</center></h1>`;
                document.querySelector('#btn-play').classList.remove('d-none');
                    return;
            } else {
                wrong++;

            }
        }
    

        wordIndex++;
        currentWord.value = splitWord[wordIndex];
        e.target.value = '';
        document.querySelector('#correct').innerHTML = `Correct : ${correct}`;
        document.querySelector('#wrong').innerHTML = `Wrong : ${wrong}`;
}


});

document.querySelector('#btn-play').addEventListener('click', (e) => {
    wrong = 0;
    correct = 0;
    wordIndex = 0;
    document.querySelector('#word').innerHTML = words;
    document.querySelector('#wrong').innerHTML = `Wrong : ${wrong}`;
    document.querySelector('#correct').innerHTML = `Correct : ${correct}`;
    document.querySelector('#inputBox').value = '';
    document.querySelector('#btn-play').classList.add('d-none');
});

document.addEventListener('keyup', (e) => {
    if(e.which == 13) {
        wrong = 0;
        correct = 0;
        wordIndex = 0;
        document.querySelector('#word').innerHTML = words;
        document.querySelector('#wrong').innerHTML = `Wrong : ${wrong}`;
        document.querySelector('#correct').innerHTML = `Correct : ${correct}`;
        document.querySelector('#inputBox').value = '';
        document.querySelector('#btn-play').classList.add('d-none');
    }
});