const buttons: NodeList = document.querySelectorAll('button');
const input: HTMLInputElement = document.querySelector('input');
let equation: string = '';

buttons.forEach(btn => {
    btn.addEventListener('click', (e: Event) => {
        handleClick(e);
    })
})

function handleClick(btn: any): void {
    let text = btn.target.outerText;
    input.value = '';

    if(text === '=') {
        // run calcFunction
        const results:string = calc(equation);
        input.value = results;
        
    } else if(text === 'C') {

        // Clear input
        input.value = '';
        equation = '';

    } else {
        equation += text;
        input.value += equation;
    }

}

function calc(equation: string): string {
    console.log(equation)
    let res = eval(equation);
    console.log(res)
    return res.toString();
}