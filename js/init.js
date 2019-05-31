$(document).ready(function(e){
    $("#videoCine").on("loadstart", function () {
        console.log("LOADSTART 1: ");
        setTimeout( function() {
            video.play();
        }, 1);
    });
    $('#owl-c1').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('#owl-c').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });

    $('#owl-c2').owlCarousel({
        loop:true,
        margin:10,
        center: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $("#lang").change(function(e){
        var idioma = "Idioma";
        var country = "País";
        if($(this).val()!="es"){
            idioma = "Language";
            country = "Country";
        }
        $("#txt-language").html(idioma);
        $("#txt-country").html(country);
    });

    $("#shopping").click(function(e){
        $(".ventana-shopping").addClass("active")
    })
    $(".closeVentana").click(function(e){
        $(this).parent().parent().removeClass("active");
    })

    $(".items-menu a").click(function(e){
        
        if($(this).hasClass("active")){
            $('.menu-tree').removeClass("active");
            $(".items-menu a").removeClass("active");
        }
        else{
            $('.menu-tree').removeClass("active");
            $(this).addClass("active")
            $('.menu-tree').addClass("active");
        }
        
    })
});