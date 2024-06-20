// let loja:object 

// loja = {
//     nome: "Burguer",
//     endereço: "Rua da água"
// }


interface LojaProps{
    nome: string;
    rua:string;
    status:boolean;
}

const BurguerBinga: LojaProps = {
    nome: 'Burguer binga',
    rua: 'Rua da agua',
    status: true,
}

// console.log(BurguerBinga)


function novaLoja({nome, rua, status}:LojaProps):void{
    console.log(`Loja ${nome} Endereço ${rua} Status ${status}`)
}


novaLoja({
    nome: 'Rico Pobre',
    rua: 'Aonde você quiser',
    status: true,
})