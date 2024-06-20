"use strict";
// let loja:object 
const BurguerBinga = {
    nome: 'Burguer binga',
    rua: 'Rua da agua',
    status: true,
};
// console.log(BurguerBinga)
function novaLoja({ nome, rua, status }) {
    console.log(`Loja ${nome} Endereço ${rua} Status ${status}`);
}
novaLoja({
    nome: 'Rico Pobre',
    rua: 'Aonde você quiser',
    status: true,
});
