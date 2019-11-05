"use strict";


addEventListener("DOMContentLoaded", () => {
    let plan1 = document.getElementById('seleccionPlan1');
    let plan2 = document.getElementById('seleccionPlan2');
    let plan3 = document.getElementById('seleccionPlan3');
    let plan4 = document.getElementById('seleccionPlan4');

    
    plan1.style.cursor = "pointer";
    plan2.style.cursor = "pointer";
    plan3.style.cursor = "pointer";
    plan4.style.cursor = "pointer";


    plan1.addEventListener("click", e => {
        plan1.classList.add("seleccion");
        plan2.classList.remove("seleccion");
        plan3.classList.remove("seleccion");
        plan4.classList.remove("seleccion");
    })

    plan2.addEventListener("click", e => {
        plan2.classList.add("seleccion");
        plan1.classList.remove("seleccion");
        plan3.classList.remove("seleccion");
        plan4.classList.remove("seleccion");
    })

    plan3.addEventListener("click", e => {
        plan3.classList.add("seleccion");
        plan2.classList.remove("seleccion");
        plan1.classList.remove("seleccion");
        plan4.classList.remove("seleccion");
    })

    plan4.addEventListener("click", e => {
        plan4.classList.add("seleccion");
        plan2.classList.remove("seleccion");
        plan3.classList.remove("seleccion");
        plan1.classList.remove("seleccion");
    })


})