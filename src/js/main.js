window.addEventListener('load', () => {
  const playerOne = 'X';
  const playerTwo = 'O';

  // Establece que el jugador uno comienza el juego
  let turn = playerOne;

  // Matriz que representa el tablero del juego
  const GAME = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

  // Selecciona todos los elementos HTML con la clase `.box`
  const BOXES = document.querySelectorAll('.box');

  // Función que comprueba si todas las casillas del tablero están llenas
  const isFull = () => {
    const CP_BOXES = [...GAME].flat(Infinity);
    const isTotal = CP_BOXES.every(box => box !== null);
    return isTotal;
  }

  // Función que comprueba si todas las casillas de una fila 
  const isFullRow = () => {
    const isTotal = GAME[0][0] !== null && GAME[0][1] !== null && GAME[0][2] !== null ||
     GAME[1][0] !== null && GAME[1][1] !== null && GAME[1][2] !== null ||
     GAME[2][0] !== null && GAME[2][1] !== null && GAME[2][2] !== null;
    return isTotal;
  }

  // Función que comprueba si todas las casillas de una columna están llenas
  const isFullColumn = () => {
    const isTotal = GAME[0][0] !== null && GAME[1][0] !== null && GAME[2][0] !== null ||
     GAME[0][1] !== null && GAME[1][1] !== null && GAME[2][1] !== null ||
     GAME[0][2] !== null && GAME[1][2] !== null && GAME[2][2] !== null;
    return isTotal;
  }


  // Función que comprueba si todas las casillas de las diagonales están llenas
  const isFullDiagonal = () => {
    const isTotal = GAME[0][0] !== null && GAME[1][1] !== null && GAME[2][2] !== null;
    return isTotal;
  }

  // Funcion que determina un empate
  const isDraw = () => {
    const isTotal = GAME[0][0] !== null && GAME[0][1] !== null && GAME[0][2] !== null &&
    GAME[1][0] !== null && GAME[1][1] !== null && GAME[1][2] !== null && GAME[2][0] !== null &&
    GAME[2][1] !== null && GAME[2][2] !== null;
    return isTotal;
  }


  // Función que comprueba si alguno de los jugadores ha ganado 
  const checkGame = () => {
    // Comprueba todas las filas, columnas y diagonales para determinar la combinacion ganadora

    const isWinnerfilaOne = GAME[0][0] === GAME[0][1] && GAME[0][1] === GAME[0][2] && GAME[0][0] !== null;
    const isWinnerfilaTwo = GAME[1][0] === GAME[1][1] && GAME[1][1] === GAME[1][2] && GAME[1][0] !== null;
    const isWinnerfilaThree = GAME[2][0] === GAME[2][1] && GAME[2][1] === GAME[2][2] && GAME[2][0] !== null;

    const isWinnerColumnOne = GAME[0][0] === GAME[1][0] && GAME[1][0] === GAME[2][0] && GAME[0][0] !== null;
    const isWinnerColumnTwo = GAME[0][1] === GAME[1][1] && GAME[1][1] === GAME[2][1]  && GAME[0][1] !== null;
    const isWinnerColumnThree = GAME[0][2] === GAME[1][2] && GAME[1][2] === GAME[2][2] && GAME[0][2] !== null;

    const isWinnerDiagonalOne = GAME[0][0] === GAME[1][1] && GAME[1][1] === GAME[2][2] && GAME[0][0] !== null;
    const isWinnerDiagonalTwo = GAME[0][2] === GAME[1][1] && GAME[1][1] === GAME[2][0]  && GAME[0][2] !== null;


    // Si un jugador ha ganado, muestra una alerta y recarga la página
    if (isWinnerfilaOne ) {
      alert(`1`+ ganador );
      window.location.reload();
      return;
    }

    if (isWinnerfilaTwo ) {
      alert(`2` + ganador);
      window.location.reload();
      return;
    }

    if (isWinnerfilaThree ) {
      alert(`3` + ganador);
      window.location.reload();
      return;
    }

    if (isWinnerColumnOne) {
      alert(`4` + ganador);
      window.location.reload();
      return;
    }

    if (isWinnerColumnTwo) {
      alert(`5` + ganador);
      window.location.reload();
      return;
    }

    if (isWinnerColumnThree) {
      alert(`6` + ganador);
      window.location.reload();
      return;
    }

    if (isWinnerDiagonalOne) {
      alert(`7` + ganador);
      window.location.reload();
      return;
    }

    if (isWinnerDiagonalTwo) {
      alert(`8` + ganador);
      window.location.reload();
      return;
    }

    if (isFull()) {
      alert(`Empate`);
      window.location.reload();
      return;
    }
  }

  // Se ejecuta para cada casilla del tablero
  BOXES.forEach((box) => {
    // Añade un evento de clic a cada casilla
    box.addEventListener('click', () => {
      // Obtiene la fila y la columna de la casilla
      const row = box.getAttribute('data-row');
      const column = box.getAttribute('data-col');

      // Actualiza la matriz del juego y la interfaz de usuario para reflejar el movimiento del jugador actual
      GAME[row][column] = turn === playerOne ? 0 : 1;
      box.innerHTML = turn;

      // Cambia el turno al otro jugador
      turn = turn === playerOne ? playerTwo : playerOne;

      // setear el ganador  
      if(checkGame){
        if (turn === playerOne) {
          ganador = " EL JUGADOR 2 HA GANADO";
        }
        else {
          ganador = " EL JUGADOR 1 HA GANADO";

        }
      }
      // Si el tablero está lleno o un jugador ha ganado 
      if (isFull()||isFullRow(0)||isFullRow(1)||isFullRow(2)||isFullDiagonal()||isFullColumn()||isDraw()) {
        //establecer un tiempo de espera para que se muestre el mensaje de alerta y se termine el juego correctamente
        setTimeout(checkGame, 100);

      }
    });
  })
})