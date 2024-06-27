document.addEventListener('DOMContentLoaded', () => {
    let text = document.getElementById('visible');
    document.addEventListener('click', (a) => {
        if (a.target.tagName === 'BUTTON') {
            let btnText = a.target.innerText;
            let string = text.value;
            switch (btnText) {
                case '=':
                    text.value = eval(string);
                    break;
                case 'C':
                    text.value = "";
                    break;
                case 'DEL':
                    text.value = string.slice(0, -1);
                    break;
                default:
                    text.value += btnText;
            }
        }
    });
});


// (function(){
//     const screen = document.querySelector('.screen');
//     const buttons = document.querySelectorAll('.btn');
//     const clear = document.querySelector('.btn-clear');
//     const equal = document.querySelector('.btn-equal');

//     buttons.forEach(function(button){
//         button.addEventListener('click', function(e){
//             const value = e.target.dataset.num;
//             if (value !== undefined) {
//                 appendToScreen(value);
//             }
//         });
//     });

//     equal.addEventListener('click', function(e){
//         if (screen.value === ''){
//             screen.value = "Please enter";
//         } else {
//             calculateResult();
//         }
//     });

//     clear.addEventListener('click', function(e){
//         clearScreen();
//     });

//     function appendToScreen(value) {
//         screen.value += value;
//     }

//     function calculateResult() {
//         const answer = eval(screen.value);
//         screen.value = answer;
//     }

//     function clearScreen() {
//         screen.value = "";
//     }
// })();
