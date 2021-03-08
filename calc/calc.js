let current = 0;
let buffer = "0";
let previousOperand = "";
const screen = document.querySelector(".result");

function buttonclick(value) {
    if(isNaN(parseInt(value))) {handleSymbol(value);}
    else {
        handleNumber(value);
        
    }
    //rerender();
}
function handleNumber(value) {
    if(buffer === "0") {
        buffer = value;}
    else {
        buffer += value;
    }
    rerender();
}
function handlemath(value) {
    if(buffer === "0"){
        return;
    }
    const intbuffer = parseInt(buffer);
    if(current === 0){
        current = intbuffer;
    }
    else{
        flushOperation(intbuffer);
    }
    previousOperand = value;
    buffer = current;
    rerender();
    buffer ="0";

}
function flushOperation(val) {
    //console.log(previousOperand);
    //console.log(val);
    //console.log(current);
    switch(previousOperand){
        case "+" :
            current += val;
            break;
        case "-" :
            current -= val;
            break;
        case "x" :
            current *= val;
            break;
        case "/" :
            current /= val;
            break;
    }
    //console.log("HEllo");
}
function handleSymbol(value) {
    switch(value) {
        case "C" : 
         buffer = "0";
         current = 0;
         rerender();
         break;
        case "del" :
            if(buffer.length === 1){
                buffer = "0";
            }
            else{
                buffer = buffer.substring(0,buffer.length-1);
            }
            rerender();
            break;
    
        case "=" :
            //console.log(buffer);
            //console.log(current);
            
            if(previousOperand === ""){return;}
            flushOperation(parseInt(buffer));
            previousOperand = "";

            
            //console.log(current);
            //console.log(buffer);
            buffer = ""+current;
            current = 0;
            rerender();
            break;
        
        case "-" :
        case "+" :
        case "x" :
        case "/" :
        handlemath(value);
        break;
        }
}


function rerender() {
    screen.innerText = buffer;
}

function init() {
    document.querySelector(".calc-buttons").addEventListener( "click",function(event) {
    buttonclick(event.target.innerText);
    
    }) ;
}


init();
