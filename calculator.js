const number = document.querySelector(".allButtons");
const screen = document.querySelector(".screen");
screen.innerText = "0";
let total = 0;
let previousClick;
let init = 0;
let operator = "";

number.addEventListener('click', (event) =>{
    if(isNaN(parseInt(event.target.innerText))){
        symbolButtons(event.target.innerText);
    }else{
        numberButtons(parseInt(event.target.innerText));
    }
})

function numberButtons(value){
    if(screen.innerText === "0"){
        screen.innerText = value;
        previousClick = "number"
    }else if(previousClick === "symbol"){
        screen.innerText = value;
        previousClick = "number";
    }else{
        screen.innerText += value;
        previousClick = "number";
    }
}

function symbolButtons(value){
    if(value === "C"){
        screen.innerText = "0";
        total = 0;
        previousClick = "symbol";
        init = 0;
    }else if(value === "+" && previousClick === "number"){
        if(operator === "+"){
            total += parseInt(screen.innerText);
            screen.innerText = total;
            console.log(screen.innerText);
        }
        if(operator === "-"){
            total -= parseInt(screen.innerText);
            screen.innerText = total;
        }
        console.log("plus checked")
        total = parseInt(screen.innerText);
        previousClick = "symbol";
        operator = "+";
    }else if(value === "-" && previousClick === "number"){
        if(init === 0){
            total = parseInt(screen.innerText);
            init = 1;
            console.log(total);
        }else if(operator === "-"){
            total -= parseInt(screen.innerText);
            screen.innerText = total;
            console.log(screen.innerText);
        }else if(operator === "+"){
            total += parseInt(screen.innerText);
            screen.innerText = total;
        }
        console.log("minus checked")
        previousClick = "symbol";
        operator = "-";
    // }else if(value === "&#215;" && previousClick === "number"){
    //     total *= parseInt(screen.innerText);
    //     screen.innerText = total;
    //     console.log(screen.innerText);
    //     previousClick = "symbol";
    // }else if(value === "&#8592;" && previousClick === "number"){
    //     total /= parseInt(screen.innerText);
    //     screen.innerText = total;
    //     console.log(screen.innerText);
    //     previousClick = "symbol";
    // }
    }else if(value === "=" && previousClick === "number"){
        if(operator === "+"){
            console.log("operator checked")
            total += parseInt(screen.innerText);
            screen.innerText = total;
            console.log(total);
            previousClick = "number";
            operator = "=";
        }else if(operator === "-"){
            total -= parseInt(screen.innerText);
            screen.innerText = total;
            previousClick = "number";
        }
    }
}