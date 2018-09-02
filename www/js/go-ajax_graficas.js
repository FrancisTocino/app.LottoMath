$(document).ready (function () {

     // 'all'- todos los registros 'anio'-> Año 'six' -> 6 Meses 'three' -> 3 Meses

    llamada_grafica_elgordo('all');
    llamada_grafica_clave('all');

    
    $("#timeline_eg").change (function(){
        var periodo = $("#timeline_eg").val();
        //console.log ('Estoy dentro del evento cambiado de EL Gordo de la Primitiva MANDANDO '+periodo);
        llamada_grafica_elgordo(periodo);
    });

    $("#timeline_eg").change (function(){
        var periodo = $("#timeline_eg").val();
        //console.log ('Estoy dentro del CAMBIO del nummero clave mandadando '+periodo);
        llamada_grafica_clave(periodo);
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


//--------------------------------------------------------------------------------------------------------------
function llamada_grafica_elgordo(periodo){
    //console.log ('Estoy en EL GORDO recibiendo:'+periodo+' y tambien mandando');
    var parametros = {"periodo":periodo};
    var nombrejuego ="El Gordo de la Primitiva";
    var id_html = "chartElGordo";
    var labelFontSize = 15;
    $.ajax({
        url : 'http://www.sugar4brain.com/_tunedlotto/php/calculo_grafica/calculo_gr_elgordo.php',
        type: 'post',
        data: parametros,
        beforeSend: function () {
                    //console.log('beforeSend EL GORDO');
                    $("#resultado_eg").html("Conectando, espere por favor...");
        },
        success:  function (response) {
                    console.log('success EL GORDO');
                    console.log(response);
                    $("#resultado_eg").html("Resultado: ");
                    var cadenajson = response.split("&")[0];
                    if (cadenajson.substr(0,1) !== '['){
                        alert('Conexión Deficiente. Compruebe su cobertura');
                    };
                    var valormedio = response.split("&")[1];
                    pinta_grafica (cadenajson,valormedio,nombrejuego,id_html,labelFontSize);
        },
		error:  function (response) {
                    console.log('Error de EL GORDO');
                    console.log('=>response'+response);
                    $("#resultado_pr").html("Conexión Deficiente. Compruebe su cobertura");

            }
    });

};

function llamada_grafica_clave(periodo){

    var parametros = {"periodo":periodo};
    var nombrejuego ="Número Clave";
    var id_html = "chartElGordoClave";
    var labelFontSize = 15;
    $.ajax({
        url : 'http://www.sugar4brain.com/_tunedlotto/php/calculo_grafica/calculo_gr_clave.php',
        type: 'post',
        data: parametros,
        beforeSend: function () {
                //console.log('N. CLAVE beforeSend');
                $("#resultado_eg").html("Conectando, espere por favor...");
        },
        success:  function (response) {
                console.log('success NUMERO CLAVE');
                console.log('=>response'+response);
                $("#resultado_eg").html("Resultado: ");
                var cadenajson = response.split("&")[0];
                if (cadenajson.substr(0,1) !== '['){
                        alert('Conexión Deficiente. Compruebe su cobertura');
                    };
                var valormedio = response.split("&")[1];
                pinta_grafica (cadenajson,valormedio,nombrejuego,id_html,labelFontSize);
        },
		error:  function (response) {
                console.log('Error en Nº Clave');
                console.log('=>response'+response);
                $("#resultado_pr").html("Conexión Deficiente. Compruebe su cobertura");
            }
    });
};