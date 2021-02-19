const rslt = document.querySelector("#result")

function dis(val) {
    rslt.value += val;
    rslt.placeholder = ""
}
function solve() {
    let x = rslt.value;
    let y = eval(x)
    rslt.value = y;
    if(rslt.value == "0"){

    }else if(rslt.value / rslt.value == 1){

    }else{
        rslt.placeholder = rslt.value;
        clr();
        setTimeout(() => {
            rslt.placeholder = ""
        }, 3000);
    }
}
function clr() {
    rslt.value = "";
}