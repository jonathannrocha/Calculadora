let select = (el) =>  document.querySelector(el)

let teclado = select(".teclado")
let visor = select('.visor')
let operadores = [ "AC","C","/","=","x"]
let verificador = 0;


teclado.addEventListener("click", (sinal)=> {
    
  


    let alvo = sinal.target
    let valor = alvo.innerHTML
    let resultado = visor.innerHTML
    
    if(verificador == 1 ) {
        visor.innerHTML = ""
    }

    if(valor === "C") {
        valor = ""  
        visor.innerHTML = visor.innerHTML.substring(0,visor.innerHTML.length -1)
        
    }


    operadores.forEach((i,a) => {
        let cont = 1;
        if (i === operadores[a] ) {
        
            if (valor == operadores[0]) {
                
                visor.innerHTML = ""   

            } 
            
            if(valor == operadores[4]){
                valor = "*"
            }

        }
    })
    let tamanhomax = select('.visor').innerHTML.length

    

    if (valor === operadores[3] ) {
        visor.innerHTML= eval(resultado)
        verificador++
    }else {
        verificador  = 0
        if(tamanhomax > 20) {
            alert("Número excedeu quantidade de caracteres permitidos!")
            
        }  else {
            if (valor.length > 1) {
                valor = ""
            }             
            visor.innerHTML += valor
        }
    }
    
});