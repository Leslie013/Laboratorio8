const personajes = document.querySelector("#Contenedor")
function createPost (name , message, imageURL){
    return `
  <div class="card">
  <img class="img" src="${imageURL}" alt="">
  <h2>${name}</h2>
  <p>${message}</p>
  </div>
  `}

for(i=1 ; i <= 20  ; i++){ 
    personajes.innerHTML+= createPost(`Character ${i}`,`Esta es mi publicación número ${i}. Esto es una prueba de generación de relleno por medio de funciones y ciclos.`,`https://rickandmortyapi.com/api/character/avatar/${i}.jpeg`)
    }