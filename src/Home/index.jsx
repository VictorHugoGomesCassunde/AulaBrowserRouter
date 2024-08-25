import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListarProdutos from '../components/ListarProdutos';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
    const [produtos, setProdutos] = useState([
        { id: 1, nome: "Arsonos", imagem: "https://cdn.nookazon.com/creaturesofsonaria/Creatures/Arsonos.png", preco: "mush 200🍄" },
        { id: 2, nome: "Kiiwin", imagem: "https://cdn.nookazon.com/creaturesofsonaria/Creatures/Kiiwin.png", preco: "mush 100🍄" },
        { id: 3, nome: "Hellion Warden", imagem: "https://cdn.nookazon.com/creaturesofsonaria/Creatures/Hellion_Warden.png", preco: "mush 4k-4.5k🍄" },
        { id: 4, nome: "Auraron", imagem: "https://i.namu.wiki/i/XrPoU5DPyCNX5PSRiGNKSYi7ldiCkaDPxPjzWSgn8ALeSXvrXUBDZdRNyTAXA8eFEoqVL3DvotDQy2I60HC0Yw.webp", preco: "mush 1.5k-2k🍄" },
        { id: 5, nome: "Umbraxi", imagem: "https://i.namu.wiki/i/puLLe1KqlWXvBV7zTuIBFegPCg3RfUjLzooasw4yjkvbzGLo0dQ4P_2e2RE5HqHb8VipVHmOvcC-ri46yiPUHg.webp", preco: "mush 6k-7k🍄" },
    ]);
  
    return (
      <>
        <Header />
        <br></br>
        <br></br>
        <main className="main-content">
        <div className="logo-container">
                   <img src="https://yt3.googleusercontent.com/xL8Gl4WeEY1MSwjTqtFzk1QLtoi2vTh24pZNWfDXEXjNCBP2PFooN8LCGf6V2VkMnLg1LRZleg=s900-c-k-c0x00ffffff-no-rj" alt="Logo" className="Logo" />
                   <div className="logo-text">loja of sonarian</div>
               </div>
               <br></br>
               <br></br>
        <Carousel
                   infiniteLoop
                   useKeyboardArrows
                   autoPlay
                   showArrows={true}
                   showStatus={false}
                   showThumbs={false}
                   dynamicHeight
               >
                   <div>
                       <img src="https://tr.rbxcdn.com/7b3f2f9efadeaaac4e1a0c9731131a97/768/432/Image/Webp" alt="Slide 1" className="Slide" />
                   </div>
                   <div>
                       <img src="https://tr.rbxcdn.com/3d6942249ba53a3ec0961f7e0228b82a/768/432/Image/Webp" alt="Slide 2" className="Slide" />
                   </div>
                   <div>
                       <img src="https://tr.rbxcdn.com/bd1e0180570ae754abdc76a35b6e973f/768/432/Image/Webp" alt="Slide 3" className="Slide" />
                   </div>
               </Carousel>
          <h1>Produtos Disponiveis</h1>
          <ListarProdutos listaProduto={produtos} />
            </main>
            <Footer />
      </>
    );
  }