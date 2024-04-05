import React, { useEffect, useState } from 'react';

function Slide(){
    const [index, changeIndex] = useState(0);
    const [SliderImages, SliderImagesUpdate] = useState(["/SlideImages/img (1).jpg"]);


    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    useEffect(()=>{
        if(SliderImages.length <= 1){
            SliderImages.push("/SlideImages/img (2).jpg");
            SliderImages.push("/SlideImages/img (3).jpg");
            SliderImages.push("/SlideImages/img (4).jpg");
            SliderImages.push("/SlideImages/img (5).jpg");
            SliderImages.push("/SlideImages/img (6).jpg");
            SliderImages.push("/SlideImages/img (7).jpg");
            SliderImages.push("/SlideImages/img (8).jpg");
            SliderImages.push("/SlideImages/Designer (1).png");
            SliderImages.push("/SlideImages/Designer (2).png");
            SliderImages.push("/SlideImages/Designer (3).png");
            SliderImages.push("/SlideImages/Designer (4).png");
            SliderImages.push("/SlideImages/Designer (5).png");
            SliderImages.push("/SlideImages/Designer (6).png");
            SliderImages.push("/SlideImages/Designer.png");
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
                    <img src='/Designer (18).png' />
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
                <img src='/Designer (16).png' />
            </div>
            <div className='ImagePromotionBox'>
                <div className='MoreDetails'>
                    <h1>
                    “Pedaling Quality, Crafting Convenience!” 🚴‍♂️🍽️
                    </h1>
                </div>
                <img id="MobileImageSlider" src={SliderImages[8]}></img>
                <img id="MobileImageSlider" src={SliderImages[9]}></img>
                <img id="MobileImageSlider" src={SliderImages[10]}></img>
                <img id="MobileImageSlider" src={SliderImages[11]}></img>
                <img id="MobileImageSlider" src={SliderImages[12]}></img>
                <img id="MobileImageSlider" src={SliderImages[13]}></img>
                <img id="MobileImageSlider" src={SliderImages[6]}></img>
                <img id="MobileImageSlider" src={SliderImages[5]}></img>
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