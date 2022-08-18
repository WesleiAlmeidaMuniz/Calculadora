function display(val){
    let antRes = document.getElementById('result').value

    document.getElementById('result').value += val;
    if(errorDisplay() === true){
        document.getElementById('result').value = antRes
        alert('Erro nos Operadores | EX: +-')
    }
}

function clearScreen(){
    document.getElementById('result').value = ''
}

function resultado(){
    let x = document.getElementById('result').value
    let res = ''

    for (let i = 0; i < x.length; i++) {
        if (x[i] == '.' && x[i+1] == '.'){
            document.getElementById('result').value = res
            return alert('Erro de digitação')
        } else if (x[i] == '+' && x[i+1] == '+') {
            document.getElementById('result').value = res
            return alert('Erro de digitação')
        } else if (x[i] == '-' && x[i+1] == '-'){
            document.getElementById('result').value = res
            return alert('Erro de digitação')
        } else if (x[i] == '/' && x[i+1] == '/'){
            document.getElementById('result').value = res
            return alert('Erro de digitação')
        }
        res += x[i]
    }

    var r = eval(res)
    document.getElementById('result').value = r
    return r
}

function errorDisplay(){ // Função de tratamento de erros. 

    let x = document.getElementById('result').value

    for (let i = 0 ; i < x.length; i++) {
        if (x[i] == '.' && x[i+1] == '+' || x[i] == '.' && x[i+1] == '-' || x[i] == '.' && x[i+1] == '*' || x[i] == '.' && x[i+1] == '/'){
            console.log('Erro')
            return true
        } else if (x[i] == '+' && x[i+1] == '.' || x[i] == '+' && x[i+1] == '-' || x[i] == '+' && x[i+1] == '*' || x[i] == '+' && x[i+1] == '/'){
            console.log('Erro')
            return true
        } else if (x[i] == '-' && x[i+1] == '.' || x[i] == '-' && x[i+1] == '+' || x[i] == '-' && x[i+1] == '*' || x[i] == '-' && x[i+1] == '/'){
            console.log('Erro')
            return true
        } else if (x[i] == '/' && x[i+1] == '.' || x[i] == '/' && x[i+1] == '-' || x[i] == '/' && x[i+1] == '*' || x[i] == '/' && x[i+1] == '/'){
            console.log('Erro')
            return true
        } else if (x[i] == '*' && x[i+1] == '.' || x[i] == '*' && x[i+1] == '-' ||  x[i] == '*' && x[i+1] == '/'){
            console.log('Erro')
            return true
        }
    }
}

function eraser(){ // Função de apagar o ultimo caractere.
    let x = document.getElementById('result').value
    var r = x.substring(0, x.length-1)

    document.getElementById('result').value = r
}

