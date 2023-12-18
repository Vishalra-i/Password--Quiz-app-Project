const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const number = [1,2,3,4,5,6,7,8,9,0] ;
const symbols = ['@', '#', '$', '%', '^', '&', '*'] ;

const display = document.querySelector("#display")
const generate = document.querySelector("#generate")
const clipboard = document.querySelector("#clipboard")

function createPassword(a1,a2,a3,a4) {
    const input = document.getElementById("input").value
    const password = [] ;
    const pass = [] ;
    
    
    const uppercaseCheckbox = document.getElementById("uppercaseCheckbox").checked;
    const lowercaseCheckbox = document.getElementById("lowercaseCheckbox").checked;
    const numberCheckbox = document.getElementById("numberCheckbox").checked;
    const symbolsCheckbox = document.getElementById("symbolsCheckbox").checked;

    if (uppercaseCheckbox) pass.push(...a1);
    if (lowercaseCheckbox) pass.push(...a2);
    if (numberCheckbox) pass.push(...a3);
    if (symbolsCheckbox) pass.push(...a4);

    for (let index = 0; index < input; index++) {
        password.push(pass[Math.floor(Math.random()*pass.length)])
    }
   return password.join('')
}

generate.addEventListener("click",(e)=>{
    display.value = createPassword(alphabet,lower,number,symbols)
})
clipboard.addEventListener("click",()=>{
    navigator.clipboard.writeText(display.value)
    const copy = document.querySelector("#copied")
    copy.style.display = "block"
    setTimeout(function () {
        copy.style.display = "none"
    },600)
   
})

