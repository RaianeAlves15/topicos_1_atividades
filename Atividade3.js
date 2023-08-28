/*Faça um script que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.),
se digitar outro valor deve aparecer valor inválido.*/
//let num = 5;
function Atvd3 (num)
{console.log('Digite um número de 1 a 7 e saiba qual é o dia da semana correspondente à esse número')

if  (num == 1)
{
console.log('Domingo');
}
if  (num == 2)
{
console.log('Segunda');
}
if  (num == 3)
{
console.log('Terça');
}
if  (num == 4)
{
console.log('Quarta');
}
if  (num == 5)
{
console.log('Quinta');
}
if  (num == 6)
{
console.log('Sexta');
}
if  (num == 7)
{
console.log('Sábado');
}
if  (num < 1 && num > 7)
{
console.log('valor inválido');
}
}
module.exports = Atvd3;