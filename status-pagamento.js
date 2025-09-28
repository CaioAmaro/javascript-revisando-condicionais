/* Você está criando um sistema de verificação de status de 
pagamento de clientes. Dependendo do status, o sistema deve 
exibir uma mensagem apropriada:

    Se o status for "pendente", exibe: "Pagamento pendente".
    Se o status for "aprovado", exibe: "Pagamento aprovado".
    Se o status for "recusado", exibe: "Pagamento recusado".

Use o switch/case para criar um programa que faça essa 
verificação e mostre a mensagem correspondente ao status do 
pagamento.

Exemplo de entrada:
const status = "aprovado"

Saída esperada:
Pagamento aprovado. */

const statusPagamento = 'recusado'

switch(statusPagamento){
    case 'aprovado':
        console.log('Pagamento Aprovado')
        break
    case 'pendente':
        console.log('Pagamento pendente')
        break
    case 'recusado':
        console.log('Pagamento Recusado')
        break
    default:
        console.log('Opção inválido')
        break
}