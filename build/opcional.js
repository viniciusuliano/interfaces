"use strict";
const Users = {
    email: 'vinicius@vinicius.com',
    idade: 20
};
// console.log(Users)
function Usuarios(usuario) {
    console.log(usuario.nome);
}
Usuarios({ nome: "Vinicius", email: "vinicius@vinicius.com", idade: 20 });
