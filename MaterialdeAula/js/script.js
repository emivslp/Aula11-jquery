// como trazer os elementos sem o jquery:
// var textoPagina = document.getElementById("textoPagina");

// como trazer os elementos com o jquery:
// var textoPagina = jQuery("#textoPagina");

// como trazer os elementos com o jquery (versao resumida):
var textoPagina = $("#textoPagina").text();

// text()=apenas lista o valor
// text(qqr coissa)=sobescreve o valor
// se mandar um valor vazio (undefined) ele nao sobescreve.
var usuarioUn = undefined;
const usuario = "Victor";
var usuarioHtml = $("#nomeUsuario").text(usuario);
console.log(textoPagina)

// split = pega um string e transforma esse string em um array
var textoPaginaConta = textoPagina.split(" ").length;
// toda vez que tiver um espaço vazio, separa o array, ai automaticamente vai contando quantos arrays tiverem
// var qntPalavras = $("#numPalavras").text(textoPaginaConta);

// contagem dinamica
var areaTexto = $("#areaTexto");
// on = addEventListener
areaTexto.on("input", function(){
    var areaTextoValor = areaTexto.val()
    var areaTextoPalavras = areaTextoValor.split(/\S+/).length -1
    $("#numPalavras").text(areaTextoPalavras);

    var areaTextoCaracteres = areaTextoValor.length
    $("#numCaracteres").text(areaTextoCaracteres);
});

// efeito na area de texto:
areaTexto.on("click", function(){
    areaTexto.removeClass("temaLight");
    areaTexto.addClass("temaDark");
    // areaTexto.toggleClass("temaDark");
});

areaTexto.on("focusout", function(){
    areaTexto.removeClass("temaDark");
    areaTexto.addClass("temaLight");
    // areaTexto.toggleClass("temaLight");
});