/* Você está criando um sistema para um jogo, 
onde o personagem tem que passar por duas condições 
para conseguir avançar para o próximo nível:

    O personagem precisa ter mais de 50 pontos.
    O personagem deve ter pelo menos uma vida restante.

Crie um programa que, dado os pontos e as vidas restantes, 
verifique se o personagem pode ou não avançar para o próximo nível.

Exemplo de entrada:

const pontos = 60;
const vidas = 1;

Saída esperada:
Próximo nível liberado!

Ou caso não cumpra os requisitos:
Não pode avançar para o próximo nível. */

const pontos = 50
const vidas = 0

if(pontos > 50 && vidas >= 1){
    console.log('Proximo nivel liberado')
}else{
    console.log('Não pode avançar para o próximo nível.')
}