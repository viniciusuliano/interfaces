type Info = {
    id: number,
    nome: string,
    categoria?:string
}



type Product = {
    preco: number;
    desconto:number
}

type ProductPrice = Info & Product;

const produtoNovo: ProductPrice = {
    id: 6500,
    nome: 'Ryzen 7500X',
    preco: 3500,
    desconto: 15,
}

console.log(produtoNovo)



