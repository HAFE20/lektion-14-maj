const buttons: NodeList = document.querySelectorAll('button');
const input: HTMLInputElement = document.querySelector('input');

buttons.forEach(btn => {
    btn.addEventListener('click', (e: Event) => {
        handleClick(e);
    })
})

function handleClick(btn: any): void {
    let text = btn.target.outerText;

    let equation: string = '';
    
    if(text === '=') {
        // run calcFunction
    } else if(text === 'C') {
        // Clear input
    } else {
        equation += text;
        input.value += equation;
    }
    
    

}