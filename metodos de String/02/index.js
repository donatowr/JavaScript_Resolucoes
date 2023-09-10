const cpf = "34585070869";
const cnpj = "12345678000199";

ConfereCpfCnpj(cpf, cnpj)

function ConfereCpfCnpj(cpf, cnpj){
    const novoCpf = cpf.replace(cpf, '123.45.789-00')
    if(cpf.length < 11){
        console.log('CPF INVALIDO');
    }else if (cpf >= 11){
        console.log(novoCpf);  
    };
        
const novoCnpj = cnpj.replace(cnpj, '12.345.678/0001-99') 
if(cnpj.length < 14){
    console.log('CNPJ INVALIDO');
}else if (cpf >= 14){
    console.log(novoCnpj);  
};

}