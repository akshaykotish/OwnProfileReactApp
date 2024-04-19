import React, { useEffect, useState } from 'react';

function Slide(){
    const [index, changeIndex] = useState(0);
    const [SliderImages, SliderImagesUpdate] = useState(["/SlideImages/A.jpg"]);


    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    useEffect(()=>{
        if(SliderImages.length <= 1){
            SliderImages.push("/SlideImages/B.jpg");
            SliderImages.push("/SlideImages/C.jpg");
            SliderImages.push("/SlideImages/D.jpg");
            SliderImages.push("/SlideImages/E.jpg");
            SliderImages.push("/SlideImages/F.jpg");
            SliderImages.push("/SlideImages/G.jpg");
            SliderImagesUpdate(SliderImages);
            changeIndex(randomNumberInRange(0, SliderImages.length-1));
        }
    }, []);

    useEffect(()=>{
        setTimeout(() => {
            if(document.getElementById("MobileImageSlider") != null){
                document.getElementById("MobileImageSlider").classList.add("FadeInImage");
            }
            if(index >= SliderImages.length - 1)
            {            
                changeIndex(0);
            }
            else{
                changeIndex(index + 1);
            }
            setTimeout(()=>{
                if(document.getElementById("MobileImageSlider") != null){
                    document.getElementById("MobileImageSlider").classList.remove("FadeInImage");
                }
            }, 2000);
        }, 5000);
    }, [index]);

    if(window.innerWidth < 600){
        return (
            <>
            <div>     
                <div className='Bruh'>
                    <img src='/Designer (18).jpg' />
                </div>
                <div className='ProfileExport'>
                    <h2>Exporting Goods</h2>
                    <p>The company exports disposable items, equipments, and spare parts. They emphasize that they provide high quality products at competitive prices with timely delivery. In the testimonials section, clients say that Profile Overseas is a reliable company that provides good service.</p>
                </div>
                <div className='MoreDetails'>
                    <h4>
                    “Pedaling Quality, Crafting Convenience!” <br/>🚴‍♂️🍽️
                    </h4>
                </div>
                <div className='ImageSliderBox'>
                    <img id="MobileImageSlider" src={SliderImages[index]} height="100%"></img>
                </div>
                <div className='MoreDetails'>
                    <h3>Tableware and cycle parts manufacturing & exports</h3>
                    <p>
                    In the realm of cycle parts manufacturing and exporting, we stand out as a prominent player. We specialize in producing high-quality bicycle components, parts, and accessories. Our global reach extends to over 64 countries, with a strong foothold in India and abroad. Meanwhile, the disposable tableware market thrives, estimated at USD 36.32 billion in 2024 and projected to reach USD 46.14 billion by 2029. From cups and plates to biodegradable options, this industry spans continents, with key markets in Asia-Pacific, North America, and Europe. Notable countries include India, Vietnam, Malaysia, and China . 🚴‍♂️🍽️
                    </p>
                </div>
            </div>
            </>
        );
    }
    else{
        return (
            <>
            <div className='Bruh'>
                <img src='/Designer (16).jpg' />
            </div>
            <div className='ImagePromotionBox'>
                <div className='MoreDetails'>
                    <h1>
                    “Pedaling Quality, Crafting Convenience!” 🚴‍♂️🍽️
                    </h1>
                </div>
                <img id="MobileImageSlider" src={SliderImages[0]}></img>
                <img id="MobileImageSlider" src={SliderImages[1]}></img>
                <img id="MobileImageSlider" src={SliderImages[2]}></img>
                <img id="MobileImageSlider" src={SliderImages[3]}></img>
                <img id="MobileImageSlider" src={SliderImages[4]}></img>
                <img id="MobileImageSlider" src={SliderImages[5]}></img>
                <img id="MobileImageSlider" src={SliderImages[6]}></img>
                <div className='MoreDetails'>
                    <h3>Tableware and cycle parts manufacturing & exports</h3>
                    <p>
                    In the realm of cycle parts manufacturing and exporting, we stand out as a prominent player. We specialize in producing high-quality bicycle components, parts, and accessories. Our global reach extends to over 64 countries, with a strong foothold in India and abroad. Meanwhile, the disposable tableware market thrives, estimated at USD 36.32 billion in 2024 and projected to reach USD 46.14 billion by 2029. From cups and plates to biodegradable options, this industry spans continents, with key markets in Asia-Pacific, North America, and Europe. Notable countries include India, Vietnam, Malaysia, and China . 🚴‍♂️🍽️
                    </p>
                </div>
            </div>
            </>
        );
    }
}

export default Slide;