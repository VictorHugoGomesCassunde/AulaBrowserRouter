import React from 'react';
import Header from "../components/Header";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../global.css';


export default function Home() {
   return (
       <>
           <Header />
           
           <div className="home-container">
               <div className="logo-container">
                   <img src="https://yt3.googleusercontent.com/xL8Gl4WeEY1MSwjTqtFzk1QLtoi2vTh24pZNWfDXEXjNCBP2PFooN8LCGf6V2VkMnLg1LRZleg=s900-c-k-c0x00ffffff-no-rj" alt="Logo" className="Logo" />
               </div>
               <p>Tá bom tá</p>
               
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
           </div>
       </>
   );
}