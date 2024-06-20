interface JogoProps{
    readonly id: string;
    nome:string;
    descricao: string;
    plataforma: string[];
}


const Valorant: JogoProps = {
    id:'123',
    nome:'Valorant',
    descricao: 'FPS',
    plataforma: ['PC', 'CONSOLE']
}


console.log(Valorant)

interface DLC extends JogoProps{
    jogoOriginal: JogoProps
    novoConteudo: string[]
}


const ValorantSkin: DLC = {
    id: '90',
    nome: 'Kuronami',
    descricao: 'SKIN NOVA',
    plataforma: ['PC', 'CONSOLE'],
    novoConteudo: ['PASSE DE BATALHA'],
    jogoOriginal: Valorant
}


console.log(ValorantSkin)