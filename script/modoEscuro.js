let modoClaro = true;
let bodyStyle = document.body.style;


function modoEscuro(){

    if(modoClaro = true){
        bodyStyle.backgroundColor = "#4d4d4d";

        modoClaro = false;
    }else{
        
        bodyStyle.backgroundColor = "#ffffff";

        modoClaro = true;
    }
}