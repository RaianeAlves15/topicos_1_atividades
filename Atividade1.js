//let salario = 1000;
function Atvd1 (salario)
{ 


if (salario <= 280) 
{
let percentual = (salario/100) * 20;
let novoSalario = salario + percentual;
let informacao = 'Salario antigo: R$' + salario + ' reais. Percentual do aumento: 20%. Valor do acréscimo: ' + percentual + ' reais. Novo salario: R$ ' + novoSalario + ' reais';
console.log(informacao);
}

if (salario > 280 && salario < 700) 
{
    let percentual = (salario/100) * 15;
    let novoSalario = salario + percentual;
    let informacao = 'Salario antigo: R$' + salario + ' reais. Percentual do aumento: 15%. Valor do acréscimo: ' + percentual + ' reais. Novo salario: R$ ' + novoSalario + ' reais';
    console.log(informacao);
}
if (salario > 700 && salario < 1500) 
{
    let percentual = (salario/100) * 10;
    let novoSalario = salario + percentual;
    let informacao = 'Salario antigo: R$' + salario + ' reais. Percentual do aumento: 10%. Valor do acréscimo: ' + percentual + ' reais. Novo salario: R$ ' + novoSalario + ' reais';
    console.log(informacao);
}
if (salario > 1500) 
{
let percentual = (salario/100) * 5;
let novoSalario = salario + percentual;
let informacao = 'Salario antigo: R$' + salario + ' reais. Percentual do aumento: 5%. Valor do acréscimo: ' + percentual + ' reais. Novo salario: R$ ' + novoSalario + ' reais';
console.log(informacao);
}
}
module.exports = Atvd1;