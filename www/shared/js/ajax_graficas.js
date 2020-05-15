$(document).ready (function () {

    llamada_grafica_primitiva('all');  // 'all'- todos los registros 'anio'-> Año 'six' -> 6 Meses 'three' -> 3 Meses
    llamada_grafica_bonoloto('all');
    llamada_grafica_euromillones('all');
    llamada_grafica_estrellas('all');
    llamada_grafica_elgordo('all');
    llamada_grafica_clave('all');

    $("#timeline_pr").change (function(){
        var periodo = $("#timeline_pr").val();
        //console.log ('Estoy dentro del evento cambiado de primitiva');
        //console.log ('=>periodo: '+periodo);
        llamada_grafica_primitiva(periodo);
    });

    $("#timeline_bn").change (function(){
        var periodo = $("#timeline_bn").val();
        //console.log('Estoy dentro del evento cambiado de Bonoloto');
        llamada_grafica_bonoloto(periodo);
    });

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

function pinta_grafica (cadenajson,valormedio,nombrejuego,id_html){

        var dataPoints = $.parseJSON(cadenajson);
        var mediaritmetica = valormedio;
        var nombrejuego = nombrejuego;
        var id_html = id_html;


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
                    interval: 1,
                },
                axisY:{
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

//------------------------------------------------------------------------------------------------------
function llamada_grafica_primitiva(periodo){
        //console.log('=>llegada a llamada_grafica_primitiva');
        var parametros = {"periodo":periodo};
        var nombrejuego ="Primitiva";
        var id_html = "chartPrimitiva";
        //console.log('=>periodo: '+periodo+ ' =>nombrejuego: '+nombrejuego+ ' =>Id_html: '+id_html);
        $.ajax({
            url : 'https://lottomath.000webhostapp.com/php/calculo_grafica/calculo_gr_primitiva.php',
            type: 'post',
            data: parametros,
            beforeSend: function () {
                    //console.log('=>Estoy en beforeSend de Primitiva');
                    $("#resultado_pr").html("Conectando, espere por favor...");
            },
            success:  function (response) {
                    console.log('=>Success Primitiva');
                    console.log('=> '+response);
                    $("#resultado_pr").html("Resultado: ");
                    var cadenajson = response.split("&")[0];
                    if (cadenajson.substr(0,1) !== '['){
                        //alert('Conexión Deficiente. Compruebe su cobertura y pulse botón actualizar');
                    };
                    var valormedio = response.split("&")[1];
                    pinta_grafica (cadenajson,valormedio,nombrejuego,id_html);
            },
			error:  function (response) {
                    console.log('=>Error Primitiva');
                    console.log('=> '+response);
                    $("#resultado_pr").html("Conexión Deficiente. Compruebe su cobertura y pulse botón actualizar");

            }
        });

};

//------------------------------------------------------------------------------------------------------
function llamada_grafica_bonoloto(periodo){
    //console.log('=>llegada a llamada_grafica_bonoloto');
    var parametros = {"periodo":periodo};
    var nombrejuego ="Bonoloto";
    var id_html = "chartBonoloto";
    //console.log('=>periodo: '+periodo+ ' =>nombrejuego: '+nombrejuego+ ' =>Id_html: '+id_html);
    $.ajax({
        url : 'https://lottomath.000webhostapp.com/php/calculo_grafica/calculo_gr_bonoloto.php',
        type: 'post',
        data: parametros,
        beforeSend: function () {
                //console.log('beforeSend de Bonoloto');
                $("#resultado_bn").html("Conectando, espere por favor...");
        },
        success:  function (response) {
                console.log('success de Bonoloto');
                console.log('=>response'+response);
                $("#resultado_bn").html("Resultado: ");
                var cadenajson = response.split("&")[0];
                if (cadenajson.substr(0,1) !== '['){
                        //alert('Conexión Deficiente. Compruebe su cobertura y pulse botón actualizar');
                    };
                var valormedio = response.split("&")[1];
                pinta_grafica (cadenajson,valormedio,nombrejuego,id_html);
        },
			error:  function (response) {
                console.log('Error de Bonoloto');
                console.log('=>response'+response);
                $("#resultado_pr").html("Conexión Deficiente. Compruebe su cobertura y pulse botón actualizar");

            }
    });
};

//----------------------------------------------------------------------------------------------------
function llamada_grafica_euromillones(periodo){
    //console.log ('Estoy en euromiilones recibiendo:'+periodo+' y tambien mandadando');
    var parametros = {"periodo":periodo};
    var nombrejuego ="Euromillones";
    var id_html = "chartEuromillones";
    $.ajax({
        url : 'https://lottomath.000webhostapp.com/php/calculo_grafica/calculo_gr_euromillones.php',
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
                        //alert('Conexión Deficiente. Compruebe su cobertura y pulse botón actualizar');
                    };
                var valormedio = response.split("&")[1];
                pinta_grafica (cadenajson,valormedio,nombrejuego,id_html);
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
    $.ajax({
        url : 'https://lottomath.000webhostapp.com/php/calculo_grafica/calculo_gr_estrellas.php',
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
                        //alert('Conexión Deficiente. Compruebe su cobertura y pulse botón actualizar');
                    };
                var valormedio = response.split("&")[1];
                pinta_grafica (cadenajson,valormedio,nombrejuego,id_html);
        },
		error:  function (response) {
                console.log('Error de Estrellas');
                console.log('=>response'+response);
                $("#resultado_pr").html("Conexión Deficiente. Compruebe su cobertura y pulse botón actualizar");

            }
    });
};

//--------------------------------------------------------------------------------------------------------------
function llamada_grafica_elgordo(periodo){
    //console.log ('Estoy en EL GORDO recibiendo:'+periodo+' y tambien mandando');
    var parametros = {"periodo":periodo};
    var nombrejuego ="El Gordo de la Primitiva";
    var id_html = "chartElGordo";
    $.ajax({
        url : 'https://lottomath.000webhostapp.com/php/calculo_grafica/calculo_gr_elgordo.php',
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
                        //alert('Conexión Deficiente. Compruebe su cobertura y pulse botón actualizar');
                    };
                    var valormedio = response.split("&")[1];
                    pinta_grafica (cadenajson,valormedio,nombrejuego,id_html);
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
    $.ajax({
        url : 'https://lottomath.000webhostapp.com/php/calculo_grafica/calculo_gr_clave.php',
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
                        //alert('Conexión Deficiente. Compruebe su cobertura y pulse botón actualizar');
                    };
                var valormedio = response.split("&")[1];
                pinta_grafica (cadenajson,valormedio,nombrejuego,id_html);
        },
		error:  function (response) {
                console.log('Error en Nº Clave');
                console.log('=>response'+response);
                $("#resultado_pr").html("Conexión Deficiente. Compruebe su cobertura y pulse botón actualizar");
            }
    });
};