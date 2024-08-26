import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListarProdutos from '../components/ListarProdutos';

export default function Ofertas() {
    const [produtos, setProdutos] = useState([
        { id: 1, nome: "Rorolo", imagem: "https://cdn.nookazon.com/creaturesofsonaria/Creatures/Rorolo.png", preco: "mush 200🍄" },
        { id: 2, nome: "Valkyrie", imagem: "https://cdn.nookazon.com/creaturesofsonaria/Creatures/Valkyrie.png", preco: "mush 100🍄" },
        { id: 3, nome: "Lactarim", imagem: "https://cdn.nookazon.com/creaturesofsonaria/Creatures/Lactarim.png", preco: "mush 4k-4.5k🍄" },
        { id: 4, nome: "Lorolael", imagem: "https://cdn.nookazon.com/creaturesofsonaria/Creatures/Lorolael.png", preco: "mush 1.5k-2k🍄" },
        { id: 5, nome: "Ibetchi", imagem: "https://cdn.nookazon.com/creaturesofsonaria/Creatures/Ibetchi.png", preco: "mush 6k-7k🍄" },
        { id: 5, nome: "Fairiocris", imagem: "https://cdn.nookazon.com/creaturesofsonaria/Creatures/Fairiocris.png", preco: "mush 6k-7k🍄" },
        { id: 6, nome: "Luxsces", imagem: "https://cdn.nookazon.com/creaturesofsonaria/Creatures/Luxsces.png", preco: "mush 6k-7k🍄" },
        { id: 7, nome: "Kavouradis", imagem: "https://cdn.nookazon.com/creaturesofsonaria/Creatures/Kavouradis.png", preco: "mush 6k-7k🍄" },
        { id: 8, nome: "Mijusuima", imagem: "https://cdn.nookazon.com/creaturesofsonaria/Creatures/Mijusuima.png", preco: "mush 6k-7k🍄" },
        { id: 9, nome: "Corvurax", imagem: "https://cdn.nookazon.com/creaturesofsonaria/Creatures/Corvurax.png", preco: "mush 6k-7k🍄" },
        { id: 10, nome: "Kendyll", imagem: "https://cdn.nookazon.com/creaturesofsonaria/Creatures/Kendyll.png", preco: "mush 6k-7k🍄" },
       
    ]);
    return (
        <div>
            <Header />
            <main className="lista-produtos">
                <ListarProdutos listaProduto={produtos} />
            </main>
            <Footer Direitos={"Victor Hugo Gomes Cassundé"}/>
        </div>
    );
}
