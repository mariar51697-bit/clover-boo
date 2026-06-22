let saldo = 0;

function atualizar() {
  document.getElementById("saldo").innerText = saldo;
}

function assistirAnuncio() {
  // simulação de anúncio
  let ganho = 10; 
  saldo += ganho;

  document.getElementById("msg").innerText =
    "Você ganhou " + ganho + " moedas!";

  atualizar();
}

function sacar() {
  if (saldo >= 1000) {
    document.getElementById("msg").innerText =
      "Saque solicitado! (simulação)";
    saldo = 0;
  } else {
    document.getElementById("msg").innerText =
      "Precisa de 1000 moedas para sacar";
  }

  atualizar();
}

atualizar();