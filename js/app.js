var mostrarOcultar =function(){
  alert('hola chicas');
};

var cargarPagina=function(){
  var elementosTab=document.getElementsByClassName("tab");
  for(var i=0; i<elementosTab.length;i++){
    elementosTab[i].addEventListener("click",mostrarOcultar);
  }
}

cargarPagina();