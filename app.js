let numeroSecreto = gerarNumeroAleatorio();
let contador = 1;


function adicionarTexto(tag, texto){
  let titulo = document.querySelector(tag);
  titulo.innerHTML = texto;
}

function mensagemInicial() {
  adicionarTexto('h1', 'Jogo do número secreto');
  adicionarTexto('p', 'Escolha um numero entre 1 e 100');
}
mensagemInicial();
function verificarChute() {
  let chute = document.querySelector('input').value;
  let textoTentativas = contador > 1 ? 'tentativas' : 'tentativa';

    if (chute == numeroSecreto) {
      adicionarTexto('h1', 'Parabéns!!!');
      adicionarTexto('p', `Você acertou com ${contador} ${textoTentativas}!`);
      document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
      if (chute < numeroSecreto) {
        adicionarTexto('h1', 'Número menor do que o número secreto');
      }else{
        adicionarTexto('h1','Número maior que o número secreto');
      }
    contador++;
    limparCampo();
    }
}

function limparCampo() {
  let chute = document.querySelector('input');
  chute.value = '';
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 100 + 1)
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  contador = 1;
  mensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}