import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListarProdutos from '../components/ListarProdutos';

export default function Produto() {
    const [produtos, setProdutos] = useState([
        { id: 1, nome: "Arsonos", imagem: "https://cdn.nookazon.com/creaturesofsonaria/Creatures/Arsonos.png", preco: "mush 200🍄" },
        { id: 2, nome: "Kiiwin", imagem: "https://cdn.nookazon.com/creaturesofsonaria/Creatures/Kiiwin.png", preco: "mush 100🍄" },
        { id: 3, nome: "Hellion Warden", imagem: "https://cdn.nookazon.com/creaturesofsonaria/Creatures/Hellion_Warden.png", preco: "mush 4k-4.5k🍄" },
        { id: 4, nome: "Auraron", imagem: "https://i.namu.wiki/i/XrPoU5DPyCNX5PSRiGNKSYi7ldiCkaDPxPjzWSgn8ALeSXvrXUBDZdRNyTAXA8eFEoqVL3DvotDQy2I60HC0Yw.webp", preco: "mush 1.5k-2k🍄" },
        { id: 5, nome: "Umbraxi", imagem: "https://i.namu.wiki/i/puLLe1KqlWXvBV7zTuIBFegPCg3RfUjLzooasw4yjkvbzGLo0dQ4P_2e2RE5HqHb8VipVHmOvcC-ri46yiPUHg.webp", preco: "mush 6k-7k🍄" },
        { id: 5, nome: "Oxidaizen", imagem: "https://cdn.nookazon.com/creaturesofsonaria/Creatures/Oxidaizen.png", preco: "mush 600🍄" },
        { id: 6, nome: "Caldonterrus", imagem: "https://cdn.nookazon.com/creaturesofsonaria/Creatures/Caldonterrus.png", preco: "mush 6k-7k🍄" },
        { id: 7, nome: "Ouratum", imagem: "https://cdn.nookazon.com/creaturesofsonaria/Creatures/Ouratum.png", preco: "mush 6k-7k🍄" },
        { id: 8, nome: "Meorlark", imagem: "https://cdn.nookazon.com/creaturesofsonaria/Creatures/Meorlark.png", preco: "mush 6k-7k🍄" },
        { id: 9, nome: "Irizah", imagem: "https://cdn.nookazon.com/128x128/creaturesofsonaria/Creatures/Irizah.png", preco: "mush 6k-7k🍄" },
        { id: 10, nome: "Bolatra", imagem: "https://cdn.nookazon.com/creaturesofsonaria/Creatures/Bolatra.png", preco: "mush 6k-7k🍄" },
        { id: 11, nome: "Firakai", imagem: "https://cdn.nookazon.com/128x128/creaturesofsonaria/Creatures/Firakai.png", preco: "mush 6k-7k🍄" },
        { id: 12, nome: "Archalium", imagem: "https://cdn.nookazon.com/128x128/creaturesofsonaria/Creatures/Archalium.png", preco: "mush 6k-7k🍄" },
        { id: 13, nome: "Ardor Warden", imagem: "https://cdn.nookazon.com/creaturesofsonaria/Creatures/Ardor_Warden.png", preco: "mush 6k-7k🍄" },
        { id: 14, nome: "Altulis", imagem: "https://cdn.nookazon.com/128x128/creaturesofsonaria/Creatures/Altulis.png", preco: "mush 6k-7k🍄" },
        { id: 15, nome: "Archinax", imagem: "https://cdn.nookazon.com/creaturesofsonaria/Creatures/Archinax.png", preco: "mush 6k-7k🍄" },
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
