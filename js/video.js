"use strict";


addEventListener("DOMContentLoaded", () => {
    let pelicula = document.getElementById('pelicula');
    let trailer = document.getElementById('trailer');
    let serie = document.getElementById('serie');
    let trailerSerie = document.getElementById('trailerSerie');

    pelicula.addEventListener("mouseover", e => {
        pelicula.classList.remove("pelicula");
        pelicula.classList.add("trailer");
        trailer.classList.remove("trailer");
        
    })

    trailer.addEventListener("mouseout", e => {
        pelicula.classList.add("pelicula");
        pelicula.classList.remove("trailer");
        trailer.classList.add("trailer");
        
    })

    serie.addEventListener("mouseover", e => {
        serie.classList.remove("serie");
        serie.classList.add("trailerSerie");
        trailerSerie.classList.remove("trailerSerie");
        
    })

    trailerSerie.addEventListener("mouseout", e => {
        serie.classList.add("serie");
        serie.classList.remove("trailerSerie");
        trailerSerie.classList.add("trailerSerie");
        
    })


})