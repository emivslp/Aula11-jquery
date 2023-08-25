    
    // $("#mudaTema").on("click" , function(){
    //     if($("#mudaTema").hasClass("temaClaro")){
    //         $("#mudaTema").removeClass("temaClaro")
    //         $("#mudaTema").addClass("temaEscuro")
    //     }
    // });

var button = $("#mudaTema")
var textoArea = $("#textoArea")

button.on("click" , function(){

    if(button.hasClass("temaClaro")){
        button.removeClass("temaClaro")
        button.addClass("temaEscuro")
        textoArea.removeClass("temaClaro")
        textoArea.addClass("temaEscuro")
    } else {
        button.removeClass("temaEscuro")
        button.addClass("temaClaro")
        textoArea.removeClass("temaEscuro")
        textoArea.addClass("temaClaro")
    }
});
    