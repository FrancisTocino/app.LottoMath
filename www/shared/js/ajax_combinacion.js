

function llamada_combinacion_primitiva(timeline_valor){

	var parametros = {"timeline":timeline_valor};

      $.ajax({

			// URL PRODUCCION
            url: 'https://lottomath.000webhostapp.com/php/calculo_combinacion/calculo_primitiva.php',
            type: 'post',
			data: parametros,

			beforeSend: function () {
          $("#resultado_pr").html("Procesando, espere por favor...");
      },
      success:  function (response) {
            var str = response;
            var n = str.indexOf(">&nbsp");
            $("#resultado_pr").html(response);
          
      },
      error:  function (response) {
          $("#resultado_pr").html("Conexión Deficiente. Compruebe su cobertura y pulse botón actualizar");
      }
		});
 

};





function llamada_combinacion_bonoloto(timeline_valor){

		var parametros = {"timeline":timeline_valor};

		$.ajax({

			url : 'https://lottomath.000webhostapp.com/php/calculo_combinacion/calculo_bonoloto.php',

			type: 'post',
			data: parametros,

			beforeSend: function () {

				//alert('BEFORE');
                $("#resultado_bn").html("Procesando, espere por favor...");

        	},
            success:  function (response) {

                  var str = response;
                  var n = str.indexOf(">&nbsp");
                  $("#resultado_bn").html(response);
            },

			error:  function (response) {

                $("#resultado_pr").html("Conexión Deficiente. Compruebe su cobertura y pulse botón actualizar");

            }

		});



};





function llamada_combinacion_euromillones(timeline_valor){

		var parametros = {"timeline":timeline_valor};

		$.ajax({

			url : 'https://lottomath.000webhostapp.com/php/calculo_combinacion/calculo_euromillones.php',

			type: 'post',

			data: parametros,

			beforeSend: function () {

                //alert('BEFORE');

                $("#resultado_eu").html("Procesando, espere por favor...");

        	},

            success:  function (response) {

                var str = response;
                var n = str.indexOf(">&nbsp");
                $("#resultado_eu").html(response);

            },

			error:  function (response) {

                $("#resultado_pr").html("Conexión Deficiente. Compruebe su cobertura y pulse botón actualizar");

            }

		});



};





function llamada_combinacion_elgordo(timeline_valor){


		var parametros = {"timeline":timeline_valor};

		$.ajax({
			url : 'https://lottomath.000webhostapp.com/php/calculo_combinacion/calculo_elgordo.php',
			type: 'post',
			data: parametros,
			beforeSend: function () {
						//alert('BEFORE');
                        $("#resultado_eg").html("Procesando, espere por favor.");
        	},
            success:  function (response) {
            			//alert(response);
                        $("#resultado_eg").html(response);
            },
			error:  function (response) {
                        $("#resultado_pr").html("Conexión Deficiente. Compruebe su cobertura y pulse botón actualizar");
            }
		});


};


function presenta_bolas(response){
    //alert (response);
    var str = response;
    var n = str.indexOf(">&nbsp");
    $("#resultado_pr").html(response);
}