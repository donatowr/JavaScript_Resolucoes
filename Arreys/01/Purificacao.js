function solucao(stringCorrompida) {
	// seu codigo aqui
    let soma = 0;
    const descodificado = [];
 for (i of stringCorrompida){
  const element = i;
    if(element == "!" || element == "@" || element == "#" || element == "$" || element == "%" || element == "&" || element == "*" || element == "(" || element == ")" || element == "."  ){
  soma++
      }else {
       descodificado.push(element);
     }
  }
    console.log(descodificado.join(""));
     return descodificado.join("");
}
