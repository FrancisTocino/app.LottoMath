$(document).ready (function () {
 // 'all'- todos los registros 'anio'-> Año 'six' -> 6 Meses 'three' -> 3 Meses

    llamada_grafica_euromillones('all');
    llamada_grafica_estrellas('all');

    $("#timeline_eu").change (function(){
        var periodo = $("#timeline_eu").val();
        //console.log ('Estoy dentro del evento cambiado de Euromillones');
        //console.log(periodo);
        llamada_grafica_euromillones(periodo);
    });

    $("#timeline_eu").change (function(){
        var periodo = $("#timeline_eu").val();
        //console.log ('Estoy dentro del evento de las estrellas');
        //console.log(periodo);
        llamada_grafica_estrellas(periodo);
    });



}); // DOCUMENT READY

// FUNCIONES ------------------------------------------------------------------------------------------

function pinta_grafica (cadenajson,valormedio,nombrejuego,id_html,labelFontSize){

        var dataPoints = $.parseJSON(cadenajson);
        var mediaritmetica = valormedio;
        var nombrejuego = nombrejuego;
        var id_html = id_html;
         var labelFontSize = labelFontSize;


        CanvasJS.addColorSet("blueShades",
        [//colorSet Array
        "#00BFFF",
        "#87CEEB",
        "#87CEFA",
        "#1E90FF",
        "#6495ED"
        ]);

        var chart = new CanvasJS.Chart(id_html, {
                colorSet: "blueShades",
                //theme: "theme1",//theme2
                title:{
                    text: nombrejuego,
                    fontSize: 15,
                    horizontalAlign: "right",
                },
                toolTip:{
                    content: "El {x} ha salido {y} veces"
                },
                axisX:{
                    labelFontSize: labelFontSize,
                    interval: 1,
                },
                axisY:{
                    labelFontSize: labelFontSize,
                    stripLines:[{
                            value:mediaritmetica,
                            label: "Media: "+mediaritmetica,
                            labelPlacement: "inside",
                            color: "#A80201",
                            }]
                },
                interactivityEnabled: true,
                animationEnabled: true,   // change to true
                dataPointWidth: 10,
                data: [
                    {
                    // Change type to "bar", "area", "spline", "column", pie",etc.
                    type: "bar",
                    dataPoints : dataPoints,
                    }
                ]
        });
        chart.render();
};



//----------------------------------------------------------------------------------------------------
function llamada_grafica_euromillones(periodo){
    //console.log ('Estoy en euromiilones recibiendo:'+periodo+' y tambien mandadando');
    var parametros = {"periodo":periodo};
    var nombrejuego ="Euromillones";
    var id_html = "chartEuromillones";
    var labelFontSize = 15;
    $.ajax({
        url : 'http://www.sugar4brain.com/_tunedlotto/php/calculo_grafica/calculo_gr_euromillones.php',
        type: 'post',
        data: parametros,
        beforeSend: function () {
                //console.log('beforeSend');
                $("#resultado_eu").html("Conectando, espere por favor...");
                },
        success:  function (response) {
                console.log('success EUROMILLONES');
                console.log(response);
                $("#resultado_eu").html("Resultado: ");
                var cadenajson = response.split("&")[0];
                if (cadenajson.substr(0,1) !== '['){
                        alert('Conexión Deficiente. Compruebe su cobertura');
                    };
                var valormedio = response.split("&")[1];
                pinta_grafica (cadenajson,valormedio,nombrejuego,id_html,labelFontSize);
        },
		error:  function (response) {
                console.log('Error de EUROMILLONES');
                console.log('=>response'+response);
                $("#resultado_pr").html("Conexión Deficiente. Compruebe su cobertura");

            }
    });
};


function llamada_grafica_estrellas(periodo){
    //console.log ('Estoy en estrellas recibiendo:'+periodo+' y tambien mandando');
    var parametros = {"periodo":periodo};
    var nombrejuego ="Estrellas";
    var id_html = "chartEstrellas";
    var labelFontSize = 15;
    $.ajax({
        url : 'http://www.sugar4brain.com/_tunedlotto/php/calculo_grafica/calculo_gr_estrellas.php',
        type: 'post',
        data: parametros,
        beforeSend: function () {
                //console.log('beforeSend');
                $("#resultado_eu").html("Conectando, espere por favor...");
                },
        success:  function (response) {
                console.log('success ESTRELLAS');
                console.log(response);
                $("#resultado_eu").html("Resultado: ");
                var cadenajson = response.split("&")[0];
                if (cadenajson.substr(0,1) !== '['){
                        alert('Conexión Deficiente. Compruebe su cobertura');
                    };
                var valormedio = response.split("&")[1];
                pinta_grafica (cadenajson,valormedio,nombrejuego,id_html,labelFontSize);
        },
		error:  function (response) {
                console.log('Error de Estrellas');
                console.log('=>response'+response);
                $("#resultado_pr").html("Conexión Deficiente. Compruebe su cobertura");

            }
    });
};
