var app = {
    inicio: function() {
        this.iniciaHammer();
    },
    
    
    iniciaHammer: function() {

        var zona = document.getElementsByTagName('body');
 
        var menu_oculto = document.getElementById ('wrapper');
        
        var direccion = "";
        
        Hammer(zona).on("swipe",function(event) {
            
            direccion = event.gesture.direction;
            ve = event.gesture.velocityX;
             console.log(event,direccion,ve);

            switch (direccion) {
                    case "right":
                        console.log('->');
                        menu_oculto.classList.add('toggled');
                        break;
            }
            direccion = "";
        });
        
        var direccion = "";
        
        Hammer(menu_oculto).on("swipe",function(event) {
            
            direccion = event.gesture.direction;
            ve = event.gesture.velocityX;    
            console.log(event,direccion,ve);
        
                switch (direccion) {
                        case "left":
                            console.log('<-');
                            menu_oculto.classList.remove('toggled');
                            break;
                }
                direccion = "";
        });
    
    },
};

if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		app.inicio();
	}, false);
}	