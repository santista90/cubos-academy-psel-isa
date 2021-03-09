function solucao(velocidade, aceleracao, distanciaObjeto) {
    let resVelocidade = (-velocidade*velocidade);
      let distancia = resVelocidade / (2 * aceleracao) ;
      if (distanciaObjeto < distancia){
          console.log("COLISAO A FRENTE");
      } else if(distanciaObjeto > distancia){
          console.log("CAMINHO SEGURO")
      } else 
          console.log("NAO ACELERE")
  }