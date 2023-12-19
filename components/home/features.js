import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const Features = () => {
    return (
        <div>
            <div className='flex justify-center mb-10'>
                <h1 className='text-5xl font-extrabold'>OUR FEATURED</h1>
            </div>
            <div className='relative text-white text-[20px] w-full mb-32'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Carousel
                        autoPlay={true}
                        infiniteLoop={true}
                        showArrows={false}
                        showThumbs={false}
                        showStatus={false}
                        showIndicators={false}
                        width="100vw" 
                        height={100}
                        style={{ maxWidth: '100%', margin: 'auto' }} 
                    >
                        <div>
                            <div className="relative">
                                <img src="/images/af.jpg" className='aspect-[16/10] md:aspect-auto object-cover' />
                                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                                    <p className="text-white  text-4xl font-bold">AVENTADOR S</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="relative">
                                <img src="/images/arev.jpg" className='aspect-[16/10] md:aspect-auto object-cover' />
                                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                                    <p className="text-white text-4xl font-bold">AVENTADOR S</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="relative">
                                <img src="/images/ab.jpg" className='aspect-[16/10] md:aspect-auto object-cover' />
                                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                                    <p className="text-white text-4xl font-bold">AVENTADOR S</p>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className='flex justify-center text-center pb-10'>
                <p className='text-2xl font-medium'>Experience the powerful Aventador S by Lamborghini. A V12 Bull with a top speed of 232 KM/h, you take on an exciting journey and dare your ego.</p>
            </div>
        </div>
    );
}

export default Features;
