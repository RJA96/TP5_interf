document.querySelector(".play").addEventListener("click", function () {
    startGame();
    document.querySelector(".play").style.display = "none"
});
document.querySelector(".restart").addEventListener("click", function () {
    location.reload();
});


let saltando = 0;
let saltandob = true;
let pj = document.querySelector(".pj");
let coin = document.querySelector(".coin");
let fire = document.querySelector(".fire");
let puntaje = document.querySelector("#puntos");
let puntos = 0;
let fin = false;
var requestId;

function loop() {
    if (puntos >= 1000) {
        fin = true;
        gameover(true)
        return
    }
    if (!(isCollide(pj.getBoundingClientRect(), fire.getBoundingClientRect()))) {
        puntos++;
        if (isCollide(pj.getBoundingClientRect(), coin.getBoundingClientRect())) {
            agarrarmoneda();
        }
        puntaje.innerHTML = "Puntaje: " + puntos + " /1000";
    } else {
        fin = true;
        gameover();
        return
    }
    window.requestAnimationFrame(loop)
}

function saltar() {
    pj.classList.add("pjsaltando");
}

function caer() {
    var caer = setTimeout(() => {
        pj.classList.remove("pjsaltando");
        coin.style.display = "block"
    }, 550);
}

function gameover(win) {
    window.clearTimeout(caer);
    coin.classList.remove("coin");
    coin.classList.remove("coinanimation");
    fire.style.display = "none";
    if (win) {
        pj.classList.add("pjidle");
        removeanmate();
        document.querySelector(".gameover").innerHTML = "YOU WIN";
        document.querySelector(".gameover").style.display = "inline"
        document.querySelector(".restart").style.display = "block"
    } else {
        pj.classList.add("pjmuerte");
        pj.addEventListener("animationend", function () {
            pj.style.background = "url(img/Dead.png)";
            document.querySelector(".gameover").style.display = "inline"
            removeanmate()
            document.querySelector(".restart").style.display = "block"
	coin.style.display = "none";
    	fire.style.display = "none";
        })
    }


}

function agarrarmoneda() {
    puntos += 30;
    coin.style.display = "none"
}

function isCollide(a, b) {
    return !(
        ((a.y + a.height) < (b.y)) ||
        (a.y > (b.y + b.height)) ||
        ((a.x + a.width) < b.x) ||
        (a.x > (b.x + b.width))
    );
}

function animarFondos() {
    let fondo0 = document.querySelector(".fondo0");
    let fondo1 = document.querySelector(".fondo1");
    let fondo2 = document.querySelector(".fondo2");
    let fondo3 = document.querySelector(".fondo3");
    fondo0.classList.add("fondo0animate");
    fondo1.classList.add("fondo1animate");
    fondo2.classList.add("fondo2animate");
    fondo3.classList.add("fondo3animate");
}

function removeanmate() {
    let fondo0 = document.querySelector(".fondo0");
    let fondo1 = document.querySelector(".fondo1");
    let fondo2 = document.querySelector(".fondo2");
    let fondo3 = document.querySelector(".fondo3");
    fondo0.classList.remove("fondo0animate");
    fondo1.classList.remove("fondo1animate");
    fondo2.classList.remove("fondo2animate");
    fondo3.classList.remove("fondo3animate");
}

function animarnpc() {

    coin.style.display = "block"
    fire.style.display = "block";
    coin.classList.add("coinanimation");
    fire.classList.add("fireanimation");
}

function startGame() {
    fin = false;
    saltandob = true;
    document.querySelector(".gameover").style.display = "none"
    pj.classList.remove("pjmuerte");
    pj.classList.remove("pjidle");
    pj.style.background = "";
    window.requestAnimationFrame(loop);
    animarFondos()
    animarnpc()
    document.addEventListener('keydown', (event) => {
        if (event.code == 'KeyW') {
            if ((saltandob) && (!(fin))) {
                saltar();
                saltandob = false;
                caer();
            } else {
                pj.style.top = -160 + "px";
            }
        }
    });
    document.addEventListener('keyup', (event) => {
        saltandob = true;
    });
}