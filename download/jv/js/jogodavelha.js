let tabuleiro;
let board;
let aviso;
let jogador;
let linha;
let coluna;

function iniciar() {
  tabuleiro = [];
  board = document.getElementById('board');
  aviso = document.getElementById('aviso');
  jogador = 1;

  for (let i = 0; i < 3; i++) {
    tabuleiro[i] = [];
    for (let j = 0; j < 3; j++) {
      tabuleiro[i][j] = 0;
    }
  }

  aviso.innerHTML = 'Vez do Jogador: ' + numeroJogador();
  exibir();
}

function exibir() {
  let tabela = '<table cellpadding="10" border="1">';

  for (let i = 0; i < 3; i++) {
    tabela += '<tr>';

    for (let j = 0; j < 3; j++) {
      let marcador;
      switch (tabuleiro[i][j]) {
        case -1:
          marcador = 'X';
          break;
        case 1:
          marcador = 'O';
          break;
        default:
          marcador = '_';
      }

      tabela += '<td>' + marcador + '</td>';
    }

    tabela += '</tr>';
  }

  tabela += '</table>';
  board.innerHTML = tabela;
}

function numeroJogador() {
  return jogador % 2 + 1;
}

function jogar() {
  linha = document.getElementById('linha').value - 1;
  coluna = document.getElementById('coluna').value - 1;

  // Verificar se a entrada é válida
  if (
    linha < 0 || linha > 2 ||
    coluna < 0 || coluna > 2 ||
    isNaN(linha) || isNaN(coluna)
  ) {
    aviso.innerHTML = 'Escolha uma linha e coluna de 1 a 3!';
    return;
  }

  // Verificar se a casa já está ocupada
  if (tabuleiro[linha][coluna] !== 0) {
    aviso.innerHTML = 'Esse campo já foi marcado';
    return;
  }

  // Marcar a jogada
  tabuleiro[linha][coluna] = numeroJogador() === 1 ? 1 : -1;

  // Mostrar o tabuleiro
  exibir();
  console.table(tabuleiro);

  // Checar se alguém ganhou
  if (checar()) return;

  // Mudar o jogador
  jogador++;
  aviso.innerHTML = 'Vez do Jogador: ' + numeroJogador();
}

function checar() {
  let ganhador = numeroJogador() === 1 ? 2 : 1;

  // Linhas
  for (let i = 0; i < 3; i++) {
    let soma = tabuleiro[i][0] + tabuleiro[i][1] + tabuleiro[i][2];
    if (soma === 3 || soma === -3) {
      aviso.innerHTML = 'O jogador ' + (soma === 3 ? 'O' : 'X') + ' ganhou!';
      return true;
    }
  }

  // Colunas
  for (let i = 0; i < 3; i++) {
    let soma = tabuleiro[0][i] + tabuleiro[1][i] + tabuleiro[2][i];
    if (soma === 3 || soma === -3) {
      aviso.innerHTML = 'O jogador ' + (soma === 3 ? 'O' : 'X') + ' ganhou!';
      return true;
    }
  }

  // Diagonal principal
  let soma = tabuleiro[0][0] + tabuleiro[1][1] + tabuleiro[2][2];
  if (soma === 3 || soma === -3) {
    aviso.innerHTML = 'O jogador ' + (soma === 3 ? 'O' : 'X') + ' ganhou!';
    return true;
  }

  // Diagonal secundária
  soma = tabuleiro[0][2] + tabuleiro[1][1] + tabuleiro[2][0];
  if (soma === 3 || soma === -3) {
    aviso.innerHTML = 'O jogador ' + (soma === 3 ? 'O' : 'X') + ' ganhou!';
    return true;
  }

  return false;
}