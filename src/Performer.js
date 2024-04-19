import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home(){
    const navigate = useNavigate();

    const handleClick = (url) => {
        navigate(url); // Replace with your desired URL
        window.scrollTo(0, 0);
      };

    return (
        <>
        <div className='PerformerJs'>
            <div className='Title'>
                Choose the category
            </div>
            <div className='Category' onClick={()=>handleClick("/Products/Cycle Parts")}>
                <div className='Img'>
                    <img src='Designer (13).jpg' width="100%"></img>
                </div>
                <div className='Text'>
                    <h2>Cycle Parts</h2>
                    <p>
                    Cycle parts: Behind the scenes of what keeps you rolling. Explore frames, wheels, brakes & more! Discover materials, manufacturers & tips.
                    </p>
                </div>
            </div>
            <div className='Category' onClick={()=>handleClick("/Products/Tableware")}>
                <div className='Img'>
                    <img src='Designer (14).jpg' width="100%"></img>
                </div>
                <div className='Text'>
                    <h2>Tableware</h2>
                    <p>
                    Crumbled napkins and colorful disposable plates, evidence of a joyful breakfast, littered the sunlit table.
                    </p>
                </div>
            </div>
            <div className='Category' onClick={()=>handleClick("/Products/Tableware")}>
            <div className='Img'>
                    <img src='/Catalogue.jpg' width="100%"></img>
                </div>
                <div className='Text'>
                    <h2>Download the product catalogue</h2>
                    <p>
                    Downloading a company catalog typically involves accessing the company's website or a designated platform where the catalog is available for download.
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;