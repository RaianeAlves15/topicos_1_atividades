/*1. O Hipermercado Assaí está com uma promoção de carnes que é imperdível. Confira:
    
                                Até 5 Kg               Acima de 5 Kg
    
    File Duplo      R$ 4,90 por Kg          R$ 5,80 por Kg
    
    Alcatra           R$ 5,90 por Kg          R$ 6,80 por Kg
    
    Picanha          R$ 6,90 por Kg          R$ 7,80 por Kg
    

Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção, porém não há limites 
para a quantidade de carne por cliente. Se compra for feita no cartão Assaí o cliente receberá ainda um desconto de 5% sobre 
o total a compra. 

Escreva um script que peça o tipo e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, contendo as informações
 da compra: tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar.*/

 function Atvd5 ()
{
 console.log('Escolha o tipo da carne');
 console.log('Digite 1 - para File Duplo')
 console.log('Digite 2 - para Alcatra')
 console.log('Digite 3 - para Picanha')
 let tipo = 3;

 console.log ('Quantos kilos?')
 let Kg = 4;

 console.log ('Forma de Pagamento')
 console.log('Digite 1 - para Cartão Assaí')
 console.log('Digite 2 - para Dinheiro')
 console.log('Digite 3 - para Pix')
let formaPagamento = 3;

let valor;
let desc = 0;
let valorPagar;

if (formaPagamento==2)
{
formaPagamento = 'Dinheiro';
}

if (formaPagamento==3)
{
formaPagamento = 'Pix';
}

 if (tipo ==1)
 {
  
    tipo = 'Filé Duplo';
   if(Kg <= 5)
   {
     valor = Kg * 4.90;
   }
   if(Kg > 5)
   {
     valor = Kg * 5.80;
   }
   valorPagar= valor;

   if (formaPagamento==1)
   {
    formaPagamento = 'Cartão Açai'
      desc= valor*0.05
      valorPagar = valor - desc;
   }
 }

 if (tipo ==2)
 {
    tipo = 'Alcatra'
   if(Kg <= 5)
   {
     valor = Kg * 5.90;
   }
   if(Kg > 5)
   {
     valor = Kg * 6.80;
   }
   valorPagar = valor;

   if (formaPagamento==1)
   {
     formaPagamento = 'Cartão Açai'
      desc = valor*0.05;
      valorPagar = valor - desc;
   }
 }

 if (tipo ==3)
 {
    tipo = 'picanha';

   if(Kg <= 5)
   {
      valor = Kg * 6.90;
   }
   if(Kg > 5)
   {
    valor = Kg * 7.80;
   }
   valorPagar= valor;
   if (formaPagamento==1)
   {
      formaPagamento = 'Cartão Açai'
      desc = valor*0.05;
      valorPagar = valor - desc;
   }

 }

 console.log('Tipo: '+tipo + ' KG: '+ Kg+ ' Preço total: ' + valor + ' Forma de Pagamento: ' + formaPagamento + ' Valor do desconto: ' + desc + ' Valor à pagar:'+ valorPagar);
}
module.exports = Atvd5;