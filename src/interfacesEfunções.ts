interface CursoProps{
    id:string;
    nome:string;
    preco:number;

    //Definir apenas a função e o que ela deve retornar

    promocao: (preco:number)=> void
}



const novoCurso : CursoProps ={
    id: "1",
    nome:"Curso TypeScript",
    preco: 450,
    promocao: (preco:number): void =>{
        console.log(`PREÇO DO CURSO: `, preco)
    }
}
console.log(novoCurso)
console.log(novoCurso.promocao(200))