result = document.getElementsByClassName("result")[0];

n = 0;
current_operator = '';

//숫자 받기
function getValue(num) {
    for (var i = 0; i < result.innerHTML.length; i++){
        //소수점 계산
        if (result.innerHTML.includes('.')) {
            for (var i = 0; i <= 9; i++){
                if (num == i) {
                    n = n + i;
                }
            }            
        }
        else {
            for (var i = 0; i <= 9; i++){
                if (num == i) {
                    n = n * 10 + i;
                }
            }
        }
    }
    result.innerHTML = n;
}

//소수점 붙이기
function dot() {
    n = n + '.';
    result.innerHTML = n;
}

//연산자 받기
function getOperator(operator) {
    //첫번째 계산일 때
    if (result.innerHTML == 0) {
        n1 = n;     
    } 
    // 두 번째 계산부터는 이전 계산 값에 이어서 계산
    else {
        n1 = result.innerHTML;
    }
    n = 0;
    current_operator = operator;    
}

//계산하기
function getResult() {
    if (current_operator == 'plus') {
        result.innerHTML = n1*1 + n*1;
        console.log(n1)
        console.log(n)
        console.log(result.innerHTML)
        
    }
    else if (current_operator == 'minus') {
        result.innerHTML = n1*1 - n*1;
    }
    else if (current_operator == 'multi') {
        result.innerHTML = n1*1 * n*1;
    }
    else if (current_operator == 'division') {
        result.innerHTML = n1*1 / n*1;
    }
}

//AC버튼
function reset() {
    n1 = 0;
    n = 0;
    result.innerHTML = 0
}

//+/-버튼
function convertSign() {
    result.innerHTML = -result.innerHTML
}

//%버튼
function percent() {
    result.innerHTML = result.innerHTML * 0.01
}