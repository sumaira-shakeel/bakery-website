import React from 'react'
import Wrapper from '@/components/shared/wrapper';
import Button from '@/components/shared/button';
import Image from 'next/image';
import cake1  from "/public/cake1.jpg"
import cake4 from "/public/cake4.jpg"
import patties from "/public/patties.jpg"


const Specialist = () => {
    return (
        <section className='mt-16 lg-mt-28'>
            <Wrapper>
                <div className='max-w-screen-2xl mx-auto'>
                {/* content */}
                <div className='px-6' >
                    <h4 className='text-4xl sm:text-5xl font-bold font-serif text-teal-800 mb-6 md:text-red-400 lg:text-red-400'>Our Products</h4>
                    <h1 className='text-teal-800 font-semibold text-lg mb-6'>Our products are made with love and careThe product Always made with fine fresh ingreidents</h1>
                    {/* <p className='mt-7 text-lg text-teal-800 mb-6 font-bold'>The product Always made with fine fresh ingreidents</p> */}
                    <div>
                        <Button text='Custumized Products ' />

                    </div>
                </div>
                {/* boxes44444444 */}
                <div className=' flex gap-7  my-20'>

                    <div className=' w-4/12 relative  px-8 py-8 hover:scale-105 hover:shadow-lg duration-300  '>
                    <div >
                    <Image src={cake4} alt={"cakeimage"} width={300} height={300} className='rounded-md'/>

                        
                    </div>
                        <h4 className='font-bold text-lg text-red-400 border '>Pasteries</h4>
                        <p className='mt-2 text-slate-600 '>we have variety fo pasteries  and Custumized products</p>


                    </div>
                    <div className=' bg-yellow-100  w-4/12 relative  px-8 py-8 hover:scale-105 hover:shadow-lg duration-300 '>
                     <div>
                        <Image src={cake1} alt={"cakeimage"} width={300} height={300} className='rounded-md'/>
                     </div>
                        <h4 className='font-bold text-lg text-red-400'>Cakes</h4>
                        <p className='mt-2 text-slate-600 '>we have variety fo pasteries  and Custumized products</p>

                                            </div>


                 <div className=' w-4/12 relative   px-8 py-8 hover:scale-105 hover:shadow-lg duration-300 '>

                    <div>
                    <Image src={patties} alt={"pattiesimage"} width={300} height={300} className='rounded-md'/>
                    </div>
                        <h4 className='font-bold text-lg text-red-400'>Patties</h4>
                        <p className='mt-2 text-slate-600'>we have variety fo pasteries  and Custumized products</p>


                    </div>  
 


                </div> 

                {/* <quarterBox header="" desc="" numbers=""/>
                <quarterBox header="" desc="" numbers=""/>
                <quarterBox header="" desc="" numbers=""/> */}
            </div>





        </Wrapper>
    </section >
    
    
    





)
}


export default Specialist;
