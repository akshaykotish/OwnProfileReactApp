import React from 'react';

function Home(){

    return (
        <>
        <div className='PerformerJs'>
            <div className='Title'>
                Choose the category
            </div>
            <div className='Category'>
                <div className='Img'>
                    <img src='Designer (13).png' width="100%"></img>
                </div>
                <div className='Text'>
                    <h1>Cycle Parts</h1>
                    <p>
                    Cycle parts: Behind the scenes of what keeps you rolling. Explore frames, wheels, brakes & more! Discover materials, manufacturers & tips.
                    </p>
                </div>
            </div>
            <div className='Category'>
            <div className='Img'>
                    <img src='Designer (14).png' width="100%"></img>
                </div>
                <div className='Text'>
                    <h1>Tableware</h1>
                    <p>
                    Crumbled napkins and colorful disposable plates, evidence of a joyful breakfast, littered the sunlit table.
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;