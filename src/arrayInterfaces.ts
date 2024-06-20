interface techProps{
    id:string;
    nome:string;
}


interface Nomes{
    tecnologia:techProps[]
}


let frontEnd :Nomes = {
    tecnologia: [
        {
            id:'1234',
            nome: 'React'
        },
        {
            id: '12',
            nome:'TypeScript'
        }
    ]
}

console.log(frontEnd.tecnologia)