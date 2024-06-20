"use strict";
const novoCurso = {
    id: "1",
    nome: "Curso TypeScript",
    preco: 450,
    promocao: (preco) => {
        console.log(`PREÇO DO CURSO: `, preco);
    }
};
console.log(novoCurso);
console.log(novoCurso.promocao(200));
