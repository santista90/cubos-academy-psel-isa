function solucao(jogadas) {
    const numeroZero = [];
    const numeroUm = [];
  for (let item of jogadas){
      if (item === 0){
          numeroZero.push(item);
      } else {
          numeroUm.push(item);
      }
  }
  if (numeroZero.length === numeroUm.length){
     console.log(true);
 }  else {
      console.log(false);
   }
}