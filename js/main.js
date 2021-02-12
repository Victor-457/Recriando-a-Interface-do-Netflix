$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

var estado_trailer = "oculto";
var estado_info = "oculto";
var trailer =document.getElementById("trailer");
var video =document.getElementById("video");
var botoes =document.getElementById("botoes");
var info =document.getElementById("info");

function show_trailer() {
    if(estado_trailer == "oculto"){
        info.style.display ="none";
        trailer.style.display = "block"; 
        video.style.width ="100%";
        trailer.style.marginTop = "2%";
        trailer.style.padding = "0";
        trailer.style.height = "100%";
        video.style.height = "100%";
        botoes.style.marginTop="3%"; 
        estado_trailer = "aparecendo";
       
    }
    else if (estado_info == "aparecendo" && estado_trailer == "aparecendo") {
        if (trailer.style.display == "block") {
            trailer.style.display = "none";    
            info.style.display = "none";
            estado_trailer= "oculto"
            estado_info= "oculto"
            botoes.style.marginTop = "5em";
            botoes.style.paddingLeft = "2em";
        }
        else{
            trailer.style.display = "block";    
            info.style.display = "none";
            estado_trailer= "aparecendo"
            estado_info= "oculto"
            botoes.style.marginTop="3%"; 
        }
    }
    else{
        info.style.display ="none";
        trailer.style.display = "none";
        botoes.style.marginTop = "5em";
        botoes.style.paddingLeft = "2em";
        estado_trailer = "oculto";    
    }
}

function show_info(){
    if(estado_info == "oculto"){
        trailer.style.display = "none";
        info.style.display = "block";
        estado_info = "aparecendo";
        botoes.style.marginTop="3%"; 
    }
    else if (estado_info == "aparecendo" && estado_trailer == "aparecendo") {
        if (info.style.display == "block") {
            info.style.display = "none";    
            trailer.style.display = "none";
            estado_trailer= "oculto"
            estado_info= "oculto"
            botoes.style.marginTop = "5em";
            botoes.style.paddingLeft = "2em";
        }
        else{
            trailer.style.display = "none";
            info.style.display = "block";
            estado_trailer="oculto"
            estado_info="aparecendo"
            botoes.style.marginTop="3%"; 
        }       
    }
    else{
        trailer.style.display = "none"; 
        info.style.display = "none";           
        estado_info = "oculto";
        botoes.style.marginTop = "5em";
        botoes.style.paddingLeft = "2em";
    }
}