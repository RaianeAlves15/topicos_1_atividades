/*1. Um posto está vendendo combustíveis com a seguinte tabela de descontos:
    - Álcool: até 20 litros, desconto de 3% por litro acima de 20 litros, desconto de 5% por litro
    - Gasolina: até 20 litros, desconto de 4% por litro acima de 20 litros, desconto de 6% por litro
    
    Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da seguinte forma:
 A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina
  é R$ 2,50 o preço do litro do álcool é R$ 1,90*/

function Atvd4 ()
{
let litros =22;

let TipoCombustivel='G';

  if  (TipoCombustivel=='A')
  {
    if(litros<=20)
    {
       let desc = (litros * 1.90) * 0.03;
       let valor = (litros * 1.90) - desc;
       console.log ('O valor que o cliente pagará é R$ '+ valor)
    }
    if (litros>20)
    {
        let desc = (litros * 1.90) * 0.05;
        let valor = (litros * 1.90) - desc;
        console.log ('O valor que o cliente pagará é R$ '+ valor)
    }

  }
  if  (TipoCombustivel=='G')
  {
    if(litros <=20)
    {
        let desc = (litros*2.50) * 0.04;
        let valor = (litros * 2.50) - desc;
        console.log ('O valor que o cliente pagará é R$ '+ valor)
    }
    if(litros > 20)
    {
        let desc = (litros*2.50) * 0.06;
        let valor = (litros * 2.50) - desc;
        console.log ('O valor que o cliente pagará é R$ '+ valor)
    }
  }
}
module.exports = Atvd4;