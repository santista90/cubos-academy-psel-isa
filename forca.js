function solucao(palpite, palavra) {
	const res = [];
    for(let item of palavra){
        if (item === palpite){
         res.push(item);
        }
    }
    console.log(res.length);
}