let btn = document.getElementById('btnFetchCharacter');
let imagen = document.getElementById('imagen');
let description = document.getElementById('name');
let pistola = document.getElementById('pistola');
const portal = btn.querySelector('#portal');
const portalEfect = btn.querySelector('#portal-efect');
let bigPortal = document.getElementById("bigPortal");
let valorRandom2,valorRandom = 0;
let gunPortal = new Audio('./sound/portal-gun-sound-effect.mp3');

btn.addEventListener('click', ()=>{
    imagen.innerHTML = ' ';
    description.innerHTML = ' ';
    bigPortal.style.opacity = 1;
    btn.style.display = "none";
    gunPortal.play();
    do{
        valorRandom2 = valorRandom;
        console.log(valorRandom2);
        valorRandom = numeroAleatorioEntre(1, 826);
        console.log(valorRandom);
    }while(valorRandom == valorRandom2);
    fetch(`https://rickandmortyapi.com/api/character/${valorRandom}`)
        .then((response) => response.json())
        .then((data) => mostrarPersonajes(data))
});

function mostrarPersonajes(personajes){
        gunPortal.currentTime = 0;
        setTimeout(function() {
            bigPortal.style.opacity = 0;
            imagen.innerHTML += `<img src="${personajes.image}" width="250px" height="250px">`;
            description.innerHTML += `<h3>Nombre: ${personajes.name} </h3>`;
            estado = personajes.status;
            if(estado == "Alive"){estado = "Vivo"}
            else if(estado == "Dead"){estado = "Muerto"}
            else{estado = "Desconocido";}
            description.innerHTML += `<h3>Estado: ${estado} </h3>`;
            btn.style.display = "block";
            pistola.style.margin = '0px';
            portal.style.top = '6px';
            portalEfect.style.top = '6px';
        }, 2000);
    };

function numeroAleatorioEntre(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

btn.addEventListener('mouseover', () => {
    portal.style.opacity = 1;
    portalEfect.style.opacity = 1;
});
btn.addEventListener('mouseout', () => {
    portal.style.opacity = 0;
    portalEfect.style.opacity = 0;
});
