function solucao(stringCorrompida) {
    const stringPurificada = [];
    const resto = [];
  for (let item of stringCorrompida){
      if (item === "!" || item === "@" || item === "#" || item === "$" || item === "%" || item === "&" || item === "*" || item === "(" || item === ")") {
          resto.push(item);
      } else {
          stringPurificada.push(item);
      }
    }
    console.log(stringPurificada.join(''));
}