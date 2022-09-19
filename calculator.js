const number = document.querySelector(".allButtons");
const screen = document.querySelector(".screen");
screen.innerText = "0";
let total = 0;
let previousClick;
let operator = "";

number.addEventListener('click', (event) =>{
    if(isNaN(parseInt(event.target.innerText))){
        symbolButtons(event.target.innerText);
    }else{
        numberButtons(parseInt(event.target.innerText));
    }
})

function numberButtons(value){
    if(screen.innerText === "0" || previousClick === "symbol"){
        screen.innerText = value;
        previousClick = "number"
    }else{
        screen.innerText += value;
        previousClick = "number";
    }
}

function symbolButtons(value){
    // Reset
    if(value === "C"){
        screen.innerText = "0";
        total = 0;
        previousClick = "symbol";
        init = 0;
    // Addition
    }else if(value === "+"){
        if(previousClick === "number"){
            if(operator === "+"){
                total += parseFloat(screen.innerText);
                screen.innerText = total;
            }else if(operator === "-"){
                total -= parseFloat(screen.innerText);
                screen.innerText = total;
            }else if(operator === "*"){
                total *= parseFloat(screen.innerText);
                screen.innerText = total;
            }else if(operator === "/"){
                total /= parseFloat(screen.innerText);
                screen.innerText = total;
            }
            total = parseFloat(screen.innerText);
            previousClick = "symbol";
            operator = "+";
            total != 0;
        }else{
            total = parseFloat(screen.innerText);
            screen.innerText = total;
            previousClick = "symbol";
            operator = "+";
        }
    // Substraction
    }else if(value === "-"){
        if(previousClick === "number"){
            if(total > 0 && operator === "-"){
                total -= parseFloat(screen.innerText);
                screen.innerText = total;
            }else if(total > 0 && operator === "+"){
                total += parseFloat(screen.innerText);
                screen.innerText = total;
            }else if(total > 0 && operator === "*"){
                total *= parseFloat(screen.innerText);
                screen.innerText = total;
            }else if(total > 0 && operator === "/"){
                total /= parseFloat(screen.innerText);
                screen.innerText = total;
            }
            total = parseFloat(screen.innerText);
            previousClick = "symbol";
            operator = "-";
        }else{
            total = parseFloat(screen.innerText);
            screen.innerText = total;
            previousClick = "symbol";
            operator = "-";
        }
    // Production
    }else if(value === "×"){
        if(previousClick === "number"){
            if(total > 0 && operator === "-"){
                total -= parseFloat(screen.innerText);
                screen.innerText = total;
            }else if (total > 0 && operator === "+"){
                total += parseFloat(screen.innerText);
                screen.innerText = total;
            }else if (total > 0 && operator === "*"){
                total *= parseFloat(screen.innerText);
                screen.innerText = total;
            }else if (total > 0 && operator === "/"){
                total /= parseFloat(screen.innerText);
                screen.innerText = total;
            }
            total = parseFloat(screen.innerText);
            previousClick = "symbol";
            operator = "*";
        }else{
            total = parseFloat(screen.innerText);
            screen.innerText = total;
            previousClick = "symbol";
            operator = "*";
        }
    // Difference
    }else if(value === "÷"){
        if(previousClick === "number"){
            if(total > 0 && operator === "-"){
                total -= parseFloat(screen.innerText);
                screen.innerText = total;
            }else if (total > 0 && operator === "+"){
                total += parseFloat(screen.innerText);
                screen.innerText = total;
            }else if (total > 0 && operator === "*"){
                total *= parseFloat(screen.innerText);
                screen.innerText = total;
            }else if (total > 0 && operator === "/"){
                total /= parseFloat(screen.innerText);
                screen.innerText = total;
            }
            total = parseFloat(screen.innerText);
            previousClick = "symbol";
            operator = "/";
        }else{
            total = parseFloat(screen.innerText);
            screen.innerText = total;
            previousClick = "symbol";
            operator = "/";
        }
    // Equal
    }else if(value === "=" && previousClick === "number"){
        if(operator === "+"){
            total += parseFloat(screen.innerText);
            screen.innerText = total;
            previousClick = "number";
            operator = "=";
        }else if(operator === "-"){
            total -= parseFloat(screen.innerText);
            screen.innerText = total;
            previousClick = "number";
            operator = "=";
        }else if(operator === "*"){
            total *= parseFloat(screen.innerText);
            screen.innerText = total;
            previousClick = "number";
            operator = "=";
        }else if(operator === "/"){
            total /= parseFloat(screen.innerText);
            screen.innerText = total;
            previousClick = "number";
            operator = "=";
        }
    }else if(value === "←"){
        screen.innerText = screen.innerText.substring(0, screen.innerText.length-1);
    }
}