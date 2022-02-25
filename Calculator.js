result = document.getElementsByClassName("result")[0];

n = '';
current_operator = '';

function getValue(num) {
    for (var i = 0; i <= 9; i++){
        if (num == i) {
            n = n*10 + i;
        }
    }
    console.log(n);
    result.innerHTML = n;
    return n;
}


function getOperator(operator) {
    n1 = n;
    n = '';
    current_operator = operator;    
}

function getResult() {
    if (current_operator == 'plus') {
        result.innerHTML = n + n1
    }
    else if (current_operator == 'minus') {
        result.innerHTML = n1 - n;
    }
    else if (current_operator == 'multi') {
        result.innerHTML = n * n1;
    }
    else if (current_operator == 'division') {
        result.innerHTML = n1 / n;
    }
}


// var value = 0;
// var value0 = 0;

// function click_num(click_id) {
//     if (click_id == "reset") {
//         value = 0;
//         result.innerHTML = value;
//     }
//     if (click_id == "sign") {
//         value = -value; 
//         result.innerHTML = value;
//     }

//     if (click_id == "percent") {
//         value = value * 0.01;
//         result.innerHTML = value;
//     }
    
//     for (var i = 0; i <= 9; i++) {
//         if (click_id == i) {
//             value = value*10 + i;
//             result.innerHTML = value;
//         }
//     }
//     value0 = value;
// }
