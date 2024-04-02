const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".abas-conteudo");

for (let i=0; i < botoes.length; i++){
botoes[i].onclick = function(){
    for (let j = 0; j< botoe.length; j++){
    botoes[j].clasList.remove("ativo");
    textos[j].clasList.remove("ativo");
    }
    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");
  }
}