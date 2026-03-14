const input = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

let str = '';

for (let i = 0; i < buttons.length; i++) {
    let buttonsElement = buttons?.[i];

    buttonsElement.addEventListener('click', (e) => {

        let innerHTML = e.target.innerHTML;

        if (innerHTML === 'AC') {
            str = '';
            input.value = str;
        }

        else if (innerHTML === 'DEL') {
            str = str.substring(0, str.length - 1);
            input.value = str;
        }

        else if (innerHTML === '=') {
            try {

                if (str.includes('/0') || str.includes('%0')) {
                    input.value = "Can't divide by 0";
                    str = "";
                } 
                else {
                    str = eval(str);
                    input.value = str;
                }

            }
            catch {
                input.value = "Error";
                str = "";
            }
        }

        else {
            str += innerHTML;
            input.value = str;
        }

    });
}
