
//Jquery realizado por Fancis Tocino


window.onload = function () {
  
                CanvasJS.addColorSet("blueShades",
                [//colorSet Array
                "#00BFFF",
                "#87CEEB",
                "#87CEFA",
                "#1E90FF",
                "#6495ED" 
                ]); 
	
                  var chart1 = new CanvasJS.Chart("chartPrimitiva", {
                    colorSet: "blueShades",
                    //theme: "theme1",//theme2
                    title:{
                      text: "Primitiva",
                      fontSize: 15,
                      horizontalAlign: "right",               
                    },
                    animationEnabled: true,   // change to true
                    dataPointWidth: 4,
                    data: [              
                    {
                      // Change type to "bar", "area", "spline", "pie",etc.
                      type: "column",
                      dataPoints: [
                        { x: 1,   y: 10},
                        { x: 2,   y: 15},
                        { x: 3,   y: 25},
                        { x: 4,   y: 30},
                        { x: 5,   y: 28},
                        { x: 6,   y: 10},
                        { x: 7,   y: 15},
                        { x: 8,   y: 25},
                        { x: 9,   y: 30},
                        { x: 10,  y: 28},
                        { x: 11,  y: 10},
                        { x: 12,  y: 15},
                        { x: 13,  y: 25},
                        { x: 14,  y: 30},
                        { x: 15,  y: 28},
                        { x: 16,  y: 10},
                        { x: 17,  y: 15},
                        { x: 18,  y: 25},
                        { x: 19,  y: 30},
                        { x: 20,  y: 28},
                        { x: 21,  y: 10},
                        { x: 22,  y: 15},
                        { x: 23,  y: 25},
                        { x: 24,  y: 30},
                        { x: 25,  y: 28},
                        { x: 26,  y: 10},
                        { x: 27,  y: 15},
                        { x: 28,  y: 25},
                        { x: 29,  y: 30},
                        { x: 30,  y: 28},
                        { x: 31,  y: 10},
                        { x: 32,  y: 15},
                        { x: 33,  y: 25},
                        { x: 34,  y: 30},
                        { x: 35,  y: 28},
                        { x: 36,  y: 10},
                        { x: 37,  y: 15},
                        { x: 38,  y: 25},
                        { x: 39,  y: 30},
                        { x: 40,  y: 28},
                        { x: 41,  y: 10},
                        { x: 42,  y: 15},
                        { x: 43,  y: 25},
                        { x: 44,  y: 30},
                        { x: 45,  y: 28},
                        { x: 46,  y: 10},
                        { x: 47,  y: 15},
                        { x: 48,  y: 25},
                        { x: 49,  y: 30}
                      ]
                    }
                    ]
                  });
                  chart1.render();
                





             var chart2 = new CanvasJS.Chart("chartBonoloto", {
                //theme: "theme2",//theme1
                colorSet: "blueShades",
                title:{
                  text: "Bonoloto" ,
                  fontSize: 15,
                  horizontalAlign: "right",             
                },
                animationEnabled: true,   // change to true
                dataPointWidth: 4,
                data: [              
                {
                  // Change type to "bar", "area", "spline", "pie",etc.
                  type: "column",
                  dataPoints: [
                    { x: 1,   y: 10},
                    { x: 2,   y: 15},
                    { x: 3,   y: 25},
                    { x: 4,   y: 30},
                    { x: 5,   y: 28},
                    { x: 6,   y: 10},
                    { x: 7,   y: 15},
                    { x: 8,   y: 25},
                    { x: 9,   y: 30},
                    { x: 10,  y: 28},
                    { x: 11,  y: 10},
                    { x: 12,  y: 15},
                    { x: 13,  y: 25},
                    { x: 14,  y: 30},
                    { x: 15,  y: 28},
                    { x: 16,  y: 10},
                    { x: 17,  y: 15},
                    { x: 18,  y: 25},
                    { x: 19,  y: 30},
                    { x: 20,  y: 28},
                    { x: 21,  y: 10},
                    { x: 22,  y: 15},
                    { x: 23,  y: 25},
                    { x: 24,  y: 30},
                    { x: 25,  y: 28},
                    { x: 26,  y: 10},
                    { x: 27,  y: 15},
                    { x: 28,  y: 25},
                    { x: 29,  y: 30},
                    { x: 30,  y: 28},
                    { x: 31,  y: 10},
                    { x: 32,  y: 15},
                    { x: 33,  y: 25},
                    { x: 34,  y: 30},
                    { x: 35,  y: 28},
                    { x: 36,  y: 10},
                    { x: 37,  y: 15},
                    { x: 38,  y: 25},
                    { x: 39,  y: 30},
                    { x: 40,  y: 28},
                    { x: 41,  y: 10},
                    { x: 42,  y: 15},
                    { x: 43,  y: 25},
                    { x: 44,  y: 30},
                    { x: 45,  y: 28},
                    { x: 46,  y: 10},
                    { x: 47,  y: 15},
                    { x: 48,  y: 25},
                    { x: 49,  y: 30}
                  ]
                }
                ]
              });
              chart2.render();
  
  
               var chart3 = new CanvasJS.Chart("chartEuromillones", {
                //theme: "theme2",//theme1
                colorSet: "blueShades",
                title:{
                  text: "Euromillones" ,
                  fontSize: 15,
                  horizontalAlign: "right",            
                },
                animationEnabled: true,   // change to true
                dataPointWidth: 4,
                data: [              
                {
                  // Change type to "bar", "area", "spline", "pie",etc.
                  type: "column",
                  dataPoints: [
                    { x: 1,   y: 10},
                    { x: 2,   y: 15},
                    { x: 3,   y: 25},
                    { x: 4,   y: 30},
                    { x: 5,   y: 28},
                    { x: 6,   y: 10},
                    { x: 7,   y: 15},
                    { x: 8,   y: 25},
                    { x: 9,   y: 30},
                    { x: 10,  y: 28},
                    { x: 11,  y: 10},
                    { x: 12,  y: 15},
                    { x: 13,  y: 25},
                    { x: 14,  y: 30},
                    { x: 15,  y: 28},
                    { x: 16,  y: 10},
                    { x: 17,  y: 15},
                    { x: 18,  y: 25},
                    { x: 19,  y: 30},
                    { x: 20,  y: 28},
                    { x: 21,  y: 10},
                    { x: 22,  y: 15},
                    { x: 23,  y: 25},
                    { x: 24,  y: 30},
                    { x: 25,  y: 28},
                    { x: 26,  y: 10},
                    { x: 27,  y: 15},
                    { x: 28,  y: 25},
                    { x: 29,  y: 30},
                    { x: 30,  y: 28},
                    { x: 31,  y: 10},
                    { x: 32,  y: 15},
                    { x: 33,  y: 25},
                    { x: 34,  y: 30},
                    { x: 35,  y: 28},
                    { x: 36,  y: 10},
                    { x: 37,  y: 15},
                    { x: 38,  y: 25},
                    { x: 39,  y: 30},
                    { x: 40,  y: 28},
                    { x: 41,  y: 10},
                    { x: 42,  y: 15},
                    { x: 43,  y: 25},
                    { x: 44,  y: 30},
                    { x: 45,  y: 28},
                    { x: 46,  y: 10},
                    { x: 47,  y: 15},
                    { x: 48,  y: 25},
                    { x: 49,  y: 30},
                    { x: 50,  y: 20}
                  ]
                }
                ]
              });
              chart3.render();
  
  
                var chart4 = new CanvasJS.Chart("chartEstrellas", {
                //theme: "theme2",//theme1
                colorSet: "blueShades",
                title:{
                  text: "Estrellas del Euromillones" ,
                  fontSize: 15, horizontalAlign: "right",             
                },
                animationEnabled: true,   // change to true
                dataPointWidth :4,
                data: [              
                {
                  // Change type to "bar", "area", "spline", "pie",etc.
                  type: "column",
                  dataPoints: [
                    { x: 1,   y: 10},
                    { x: 2,   y: 15},
                    { x: 3,   y: 25},
                    { x: 4,   y: 30},
                    { x: 5,   y: 28},
                    { x: 6,   y: 10},
                    { x: 7,   y: 15},
                    { x: 8,   y: 25},
                    { x: 9,   y: 30},
                    { x: 10,  y: 28},
                    { x: 11,  y: 10}
                  ]
                }
                ]
              });
              chart4.render();
  
  
                var chart5 = new CanvasJS.Chart("chartElGordo", {
                //theme: "theme2",//theme1
                colorSet :"blueShades",
                title:{
                  text: "El Gordo de la Primitiva" ,
                  fontSize: 15,
                  horizontalAlign: "right",            
                },
                animationEnabled: true,   // change to true
                dataPointWidth:4,
                data: [              
                {
                  // Change type to "bar", "area", "spline", "pie",etc.
                  type: "column",
                  dataPoints: [
                    { x: 1,   y: 10},
                    { x: 2,   y: 15},
                    { x: 3,   y: 25},
                    { x: 4,   y: 30},
                    { x: 5,   y: 28},
                    { x: 6,   y: 10},
                    { x: 7,   y: 15},
                    { x: 8,   y: 25},
                    { x: 9,   y: 30},
                    { x: 10,  y: 28},
                    { x: 11,  y: 10},
                    { x: 12,  y: 15},
                    { x: 13,  y: 25},
                    { x: 14,  y: 30},
                    { x: 15,  y: 28},
                    { x: 16,  y: 10},
                    { x: 17,  y: 15},
                    { x: 18,  y: 25},
                    { x: 19,  y: 30},
                    { x: 20,  y: 28},
                    { x: 21,  y: 10},
                    { x: 22,  y: 15},
                    { x: 23,  y: 25},
                    { x: 24,  y: 30},
                    { x: 25,  y: 28},
                    { x: 26,  y: 10},
                    { x: 27,  y: 15},
                    { x: 28,  y: 25},
                    { x: 29,  y: 30},
                    { x: 30,  y: 28},
                    { x: 31,  y: 10},
                    { x: 32,  y: 15},
                    { x: 33,  y: 25},
                    { x: 34,  y: 30},
                    { x: 35,  y: 28},
                    { x: 36,  y: 10},
                    { x: 37,  y: 15},
                    { x: 38,  y: 25},
                    { x: 39,  y: 30},
                    { x: 40,  y: 28},
                    { x: 41,  y: 10},
                    { x: 42,  y: 15},
                    { x: 43,  y: 25},
                    { x: 44,  y: 30},
                    { x: 45,  y: 28},
                    { x: 46,  y: 10},
                    { x: 47,  y: 15},
                    { x: 48,  y: 25},
                    { x: 49,  y: 30},
                    { x: 50,  y: 28},
                    { x: 51,  y: 10},
                    { x: 52,  y: 15},
                    { x: 53,  y: 25},
                    { x: 54,  y: 30}
                  ]
                }
                ]
              });
              chart5.render();
  
                var chart6 = new CanvasJS.Chart("chartElGordoClave", {
                //theme: "theme2",//theme1
                colorSet : "blueShades",
                title:{
                  text: "Número Clave del Gordo de la Primitiva" ,
                  fontSize: 15,
                  horizontalAlign: "right",             
                },
                dataPointWidth: 4,
                animationEnabled: true,   // change to true
                data: [              
                {
                  // Change type to "bar", "area", "spline", "pie",etc.
                  type: "column",
                  dataPoints: [
                  	{ x: 0,   y: 21},
                    { x: 1,   y: 10},
                    { x: 2,   y: 15},
                    { x: 3,   y: 25},
                    { x: 4,   y: 30},
                    { x: 5,   y: 28},
                    { x: 6,   y: 10},
                    { x: 7,   y: 15},
                    { x: 8,   y: 25},
                    { x: 9,   y: 30}
                  ]
                }
                ]
              });
              chart6.render();


}; 