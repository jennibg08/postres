// Obtén una referencia al menú desplegable utilizando su id
const menuDesplegable = document.getElementById('menu-desplegable');

// Agrega un evento de clic al menú desplegable
menuDesplegable.addEventListener('click', function(event) {
  // Verifica si el elemento clicado es un enlace dentro del menú desplegable
  if (event.target.tagName === 'A') {
    // Cierra el menú desplegable
    menuToggle.classList.remove('open');
  }
 
  
 


  });
  
 


  
   
   




