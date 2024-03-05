function pluse() {
    let a = document.getElementsByClassName("a")[0].value;
    let b = document.getElementsByClassName("b")[0].value;
    let result = document.getElementsByClassName("result")[0];
    let c = Number(a) + Number (b);
    return result.value = c;
}

function minuse() {
    let a = document.getElementsByClassName("a")[0].value;
    let b = document.getElementsByClassName("b")[0].value;
    let result = document.getElementsByClassName("result")[0];
    let c = Number(a) - Number(b);
    return result.value = c
}

function multiply() {
    let a = document.getElementsByClassName("a")[0].value;
    let b = document.getElementsByClassName("b")[0].value;
    let result = document.getElementsByClassName("result")[0];
    let c = Number(a) * Number(b);
    return result.value = c
}

function devide() {
    let a = document.getElementsByClassName("a")[0].value;
    let b = document.getElementsByClassName("b")[0].value;
    let result = document.getElementsByClassName("result")[0];
    
    if (b == 0){
        alert("На ноль делить нельзя")
    }
    let c = Number(a) / Number(b);
    return result.value = c

}