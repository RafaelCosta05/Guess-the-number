document.querySelector('.check').addEventListener('click', randomNumber);
document.querySelector('.again').addEventListener('click', again);

let numeroSecreto = Math.trunc(Math.random() * 100) + 1;
let pontuacaoMaxima = Number(localStorage.getItem('.highscore'));
let pontuacao = 10;
let adivinhaNumero = '';
let mensagem = "Começa adivinhar...";

function updateMessage(novaMensagem) {
    mensagem = novaMensagem;
    document.querySelector('.message').textContent = novaMensagem;
}

function randomNumber() {
    adivinhaNumero = document.querySelector('.guess').value;
  
    if (isNaN(parseInt(adivinhaNumero))) {
        updateMessage("⛔️ nenhum número!");
    } else {
        if (parseInt(adivinhaNumero) != numeroSecreto) {
            pontuacao--;

            if (pontuacao === 0) {
                updateMessage("😡 Perdeu o Jogo");
                document.querySelector('.score').textContent = pontuacao;
                document.querySelector('.number').textContent = numeroSecreto
                document.querySelector("body").style.backgroundColor = 'red';
                document.querySelector('.check').disabled = true;
                document.querySelector('.guess').disabled = true;
            } else {
                document.querySelector('.score').textContent = pontuacao;

                if (parseInt(adivinhaNumero) > numeroSecreto) {
                    updateMessage("📈 Muito alto!");
                } else if (parseInt(adivinhaNumero) < numeroSecreto) {
                    updateMessage("📉 Muito baixo!");
                }
            }
        } else if (parseInt(adivinhaNumero) === numeroSecreto) {
            updateMessage("🎉 Número Correto!");
            document.querySelector('.number').textContent = numeroSecreto
            document.querySelector("body").style.backgroundColor = "#60b347";
            document.querySelector('.check').disabled = true;
            document.querySelector('.guess').disabled = true;
            
            if (pontuacao > pontuacaoMaxima) {
                pontuacaoMaxima = pontuacao;
                document.querySelector('.highscore').textContent = pontuacaoMaxima;
            }
        }
    }
}

function again() {
    updateMessage("Começa adivinhar...");
    pontuacao = 10;
    document.querySelector('.score').textContent = pontuacao;
    numeroSecreto = Math.trunc(Math.random() * 100) + 1;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector('.guess').value = '';
    document.querySelector('.check').disabled = false;
    document.querySelector('.guess').disabled = false;
    document.querySelector('.number').textContent = '?';
}
