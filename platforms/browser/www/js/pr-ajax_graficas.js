$(document).ready (function () {

    llamada_grafica_primitiva('all');  // 'all'- todos los registros 'anio'-> Año 'six' -> 6 Meses 'three' -> 3 Meses
    
    $("#timeline_pr").change (function(){
        var periodo = $("#timeline_pr").val();
        //console.log ('Estoy dentro del evento cambiado de primitiva');
        //console.log ('=>periodo: '+periodo);
        llamada_grafica_primitiva(periodo);
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

//------------------------------------------------------------------------------------------------------
function llamada_grafica_primitiva(periodo){
        //console.log('=>llegada a llamada_grafica_primitiva');
        var parametros = {"periodo":periodo};
        var nombrejuego ="Primitiva";
        var id_html = "chartPrimitiva";
        var labelFontSize = 15;

        
        //console.log('=>periodo: '+periodo+ ' =>nombrejuego: '+nombrejuego+ ' =>Id_html: '+id_html);
        $.ajax({
            url : 'http://www.sugar4brain.com/_tunedlotto/php/calculo_grafica/calculo_gr_primitiva.php',
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
                        alert('Conexión Deficiente. Compruebe su cobertura');
                    };
                    var valormedio = response.split("&")[1];
                    pinta_grafica (cadenajson,valormedio,nombrejuego,id_html,labelFontSize);
            },
			error:  function (response) {
                    console.log('=>Error Primitiva');
                    console.log('=> '+response);
                    $("#resultado_pr").html("Conexión Deficiente. Compruebe su cobertura");
            }
        });
};
