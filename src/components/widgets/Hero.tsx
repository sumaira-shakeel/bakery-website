// Hero.tsx
import React from 'react';
import Wrapper from '@/components/shared/wrapper';
import Image from 'next/image'; 
import poster1 from '/public/poster1.png'
// components
import Button from '../shared/button';




const Hero = () => {
    return (
        <section>
            <Wrapper>
                <div className='flex  flex-col md:flex-row  items-center px-5 '>
                    {/* left-side 8888888888*/}
                    <div className='flex-1 mr-120'>
                        <h4 className='text-teal-800 font-bold text-4xl font-serif'>Our cakes are famous for their taste and design. We have created our cakes to be perfect for any occasion.
                        </h4>
                        <h1 className='text-4xl sm:text-5xl font-bold font-serif text-teal-800 mt-6 md:text-red-400 lg:text-red-400'>THE BEST AND EXPERTES BAKERS IN TOWN!</h1>
                        <p className='mt-7 text-lg text-teal-800 mb-6'>Our cake selection includes: Chocolate Cake, Vanilla Cake, and Red Velvet Cake.
                        While you can make our cakes at home, the quality and taste of our bakery-made cakes are unmatched.
                        Our pastries are renowned for their taste and design. We have crafted our pastries to provide a new experience for your taste buds.</p>
                       
                            <Button text={" ORDER NOW!"}/>
                            <br />
                            <br />




                  
                        {/* <button className= 'bg-teal-800 text-white border rounded-full py-3 px-4 mt-6 mt-6'>ORDER NOW!</button> */}

                    </div>
                    {/* right-side8888888888888 */}
                    <div className='flex-1'>
                      <Image src={poster1} alt='banner-image ' width={600}/>

                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default Hero;