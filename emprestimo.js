function solucao(ganhos, serasaScore, mesesParaPagar) {
    let juros = 0;
     if(serasaScore < 300){
         juros = 3 / 100;
     } else if (serasaScore < 700){
         juros = 9 / 100;
     } else {
         juros = 15 / 100;
     }
    parcela = ((ganhos * 3) + (ganhos * juros)) / mesesParaPagar;
     console.log(parcela);
 }