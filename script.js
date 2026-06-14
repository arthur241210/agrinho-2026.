let pontos = 0;

function ganharPonto(){
    pontos++;
    document.getElementById("score").innerText = pontos;

    if(pontos >= 10){
        alert("Parabéns! Você criou uma fazenda sustentável!");
    }
}
