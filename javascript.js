const buton = document.getElementById("botao")
const p = document.getElementById("paragrafo")
const inputValue = input.value

function cliqueinobutton(){
const input = document.getElementById("input").value

    
       
    input === "" ? alert("Insira um numero ") :  false
    

    if(input % 2 === 0){

        if( input === "2"){
            p.innerHTML = "Único número Par e primo."
        }else{
            p.innerHTML = "É Número par, não é primo."
        }
       
    }else{
        for (let i = 2; i < input; i++){
            if (input % i === 0){
                p.innerHTML = "É Número impar, mais não e primo."
                break
            }else{
    
             if( i === input - 1) p.innerHTML ="É Número impar e primo"
            }
        }
    }
    
    
}

buton.addEventListener("click" , cliqueinobutton)
