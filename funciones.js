function semaforo(color)
{
    let coloresSem = ['rojo','amarillo','verde'];
    for(let i=0; i<coloresSem.length; i++)
    {
        if(color == coloresSem[i])
        {
            let encendido = document.getElementById(coloresSem[i]);
            let apagado = document.getElementById(coloresSem[i+1==coloresSem.length?0:i+1]);
            encendido.style.cssText='filter:brightness(100%);';
            apagado.style.cssText='filter:brightness(20%);';
        }
    }
}
setInterval(function(){
    setTimeout(semaforo,3000,'rojo');
    setTimeout(semaforo,6000,'verde');
    setTimeout(semaforo,9000,'amarillo');
},9000);
