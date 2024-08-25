import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListarProdutos from '../components/ListarProdutos';

export default function Ofertas() {
    const [produtos, setProdutos] = useState([
        { id: 1, nome: "Arsonos", imagem: "https://cdn.nookazon.com/creaturesofsonaria/Creatures/Arsonos.png", preco: "mush 200🍄" },
        { id: 2, nome: "Kiiwin", imagem: "https://cdn.nookazon.com/creaturesofsonaria/Creatures/Kiiwin.png", preco: "mush 100🍄" },
        { id: 3, nome: "Hellion Warden", imagem: "https://cdn.nookazon.com/creaturesofsonaria/Creatures/Hellion_Warden.png", preco: "mush 4k-4.5k🍄" },
        { id: 4, nome: "Auraron", imagem: "https://i.namu.wiki/i/XrPoU5DPyCNX5PSRiGNKSYi7ldiCkaDPxPjzWSgn8ALeSXvrXUBDZdRNyTAXA8eFEoqVL3DvotDQy2I60HC0Yw.webp", preco: "mush 1.5k-2k🍄" },
        { id: 5, nome: "Umbraxi", imagem: "https://i.namu.wiki/i/puLLe1KqlWXvBV7zTuIBFegPCg3RfUjLzooasw4yjkvbzGLo0dQ4P_2e2RE5HqHb8VipVHmOvcC-ri46yiPUHg.webp", preco: "mush 6k-7k🍄" },
        { id: 5, nome: "Umbraxi", imagem: "https://i.namu.wiki/i/puLLe1KqlWXvBV7zTuIBFegPCg3RfUjLzooasw4yjkvbzGLo0dQ4P_2e2RE5HqHb8VipVHmOvcC-ri46yiPUHg.webp", preco: "mush 6k-7k🍄" },
        { id: 6, nome: "Umbraxi", imagem: "https://i.namu.wiki/i/puLLe1KqlWXvBV7zTuIBFegPCg3RfUjLzooasw4yjkvbzGLo0dQ4P_2e2RE5HqHb8VipVHmOvcC-ri46yiPUHg.webp", preco: "mush 6k-7k🍄" },
        { id: 7, nome: "Umbraxi", imagem: "https://i.namu.wiki/i/puLLe1KqlWXvBV7zTuIBFegPCg3RfUjLzooasw4yjkvbzGLo0dQ4P_2e2RE5HqHb8VipVHmOvcC-ri46yiPUHg.webp", preco: "mush 6k-7k🍄" },
        { id: 8, nome: "Umbraxi", imagem: "https://i.namu.wiki/i/puLLe1KqlWXvBV7zTuIBFegPCg3RfUjLzooasw4yjkvbzGLo0dQ4P_2e2RE5HqHb8VipVHmOvcC-ri46yiPUHg.webp", preco: "mush 6k-7k🍄" },
        { id: 9, nome: "Umbraxi", imagem: "https://i.namu.wiki/i/puLLe1KqlWXvBV7zTuIBFegPCg3RfUjLzooasw4yjkvbzGLo0dQ4P_2e2RE5HqHb8VipVHmOvcC-ri46yiPUHg.webp", preco: "mush 6k-7k🍄" },
        { id: 10, nome: "Umbraxi", imagem: "https://i.namu.wiki/i/puLLe1KqlWXvBV7zTuIBFegPCg3RfUjLzooasw4yjkvbzGLo0dQ4P_2e2RE5HqHb8VipVHmOvcC-ri46yiPUHg.webp", preco: "mush 6k-7k🍄" },
       
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
