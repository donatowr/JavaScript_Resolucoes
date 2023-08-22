const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

if (idade <12 || idade >65 || possuiPatologia === true || altura < 150){
    console.log('ACESSO NEGADO');
}else if(ehEstudante===false){
    console.log(`20 reais`);    
}else{
    (ehEstudante===true)
    console.log(`10 reais`);
}
