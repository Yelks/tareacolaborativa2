function limpiar(){
    document.getElementById('form').reset();
}

function sumar(){

        var x = parseInt(document.getElementById('valor1').value);
    var y = parseInt(document.getElementById('valor2').value);

    if(isNaN(x) || isNaN(y))
    { 
        alert("Debe llenar los campos de texto");
                
    }else
    {
    document.getElementById('resultado').innerHTML = x+y;
    }
}

function restar(){  


    var x = parseInt(document.getElementById('valor1').value);
    var y = parseInt(document.getElementById('valor2').value);
    
    if(isNaN(x) || isNaN(y))
    { 
        alert("Debe llenar los campos de texto");
                
    }else
    {       
        document.getElementById('resultado').innerHTML = x-y;
    }
    
}

function multiplicar(){
    var x = parseInt(document.getElementById('valor1').value);
    var y = parseInt(document.getElementById('valor2').value);

    if(isNaN(x) || isNaN(y))
    { 
        alert("Debe llenar los campos de texto");
                
    }else
    {
    document.getElementById('resultado').innerHTML = x*y;
    }
}

function dividir(){
    var x = parseInt(document.getElementById('valor1').value);
    var y = parseInt(document.getElementById('valor2').value);

    if(isNaN(x) || isNaN(y))
    { 
        alert("Debe llenar los campos de texto");
                
    }else
    {
    document.getElementById('resultado').innerHTML = x/y;
    }
}

function igual(){
    console.log("No hay nada");
}
 