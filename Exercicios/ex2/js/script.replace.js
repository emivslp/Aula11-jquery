// selecionando as coisas do html para o js

const textoDigitado = $("#textoDigitado");
const buscarPalavra = document.querySelector("#buscarPalavra");
const susbtituirPalavra = document.getElementById("susbtituirPalavra");
const trocarBtn = document.getElementById("trocar");
const trocarTodosBtn = document.getElementById("trocarTodos");

// eventos
// toda vez que vamos fazer um interação, temos que colocar a interacao + uma funcao
trocarBtn.addEventListener('click' , trocarTexto);
trocarTodosBtn.addEventListener('click' , trocarTodosTexto);

// functions
function trocarTexto(){
    // precisa colocar o value pra que seja guardado (mas nao na memoria ram) e analisado o que o usuario digitou. Lá em cima nos linkamos o elemento, e agora estamos pegando apenas o valor que vai ser colocado nesse elemento.
    let textoDigitadoValor = textoDigitado.value;
    let buscarPalavraValor = buscarPalavra.value;
    let susbtituirPalavraValor = susbtituirPalavra.value;

    var textoFomatado = textoDigitadoValor.replace(buscarPalavraValor,susbtituirPalavraValor);
    textoDigitado.value = textoFomatado;
    // pega o valor que o usuario digitou e joga (recebe) para o texto formatado, que é o novo texto
    
}

function trocarTodosTexto(){

    let textoDigitadoValor = textoDigitado.value;
    let buscarPalavraValor = buscarPalavra.value;
    let susbtituirPalavraValor = susbtituirPalavra.value;

    var textoFomatado = textoDigitadoValor.replaceAll(buscarPalavraValor,susbtituirPalavraValor);
    textoDigitado.value = textoFomatado;

}

// contagem dinamica
// var areaTexto = $("#areaTexto");
// on = addEventListener
textoDigitado.on("input", function(){
    var areaTextoValor = textoDigitado.val()
    var areaTextoPalavras = areaTextoValor.split(/\S+/).length -1
    $("#numPalavras").text(areaTextoPalavras);

    var areaTextoCaracteres = areaTextoValor.length
    $("#numCaracteres").text(areaTextoCaracteres);
}); 


// efeito na area de texto:
textoDigitado.on("click", function(){
    textoDigitado.removeClass("temaLight");
    textoDigitado.addClass("temaDark");
    // areaTexto.toggleClass("temaDark");
});

textoDigitado.on("focusout", function(){
    textoDigitado.removeClass("temaDark");
    textoDigitado.addClass("temaLight");
    // areaTexto.toggleClass("temaLight");
});