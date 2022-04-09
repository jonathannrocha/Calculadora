let select = (el) =>  document.querySelector(el)

let teclado = select(".teclado")
let visor = select('.visor')
let operadores = [ "AC","C","/","=","x"]
let verificador = 0;
let resultado 


teclado.addEventListener("click", (sinal)=> {
    
  


    let alvo = sinal.target
    let valor = alvo.innerHTML
    
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
            
            

        }
    })
    let tamanhomax = select('.visor').innerHTML.length

    

    if (valor === operadores[3] ) {
        
        resultado = visor.innerHTML
        try {
            visor.innerHTML= eval(resultado)
          } catch (erro) {
            if (erro instanceof SyntaxError) {
               resultado =  visor.innerHTML.replace('x', '*')
             visor.innerHTML= eval(resultado)
            }
           
          }
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