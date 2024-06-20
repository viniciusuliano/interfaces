interface CadastroUser{
    nome?:string;
    email:string;
    idade:number;
}


const Users:CadastroUser ={
    email: 'vinicius@vinicius.com',
    idade: 20
}

// console.log(Users)


function Usuarios(usuario:CadastroUser){
    console.log(usuario.nome)
}


Usuarios({nome:"Vinicius", email:"vinicius@vinicius.com", idade: 20})