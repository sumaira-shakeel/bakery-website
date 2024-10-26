import React from 'react'
import Image from 'next/image';
import shop from "/public/shop.jpg"
import shop2 from "/public/shop2.jpg"
import staff1 from "/public/staff1.jpg"
import Footer from '@/components/layout/Footer';
import Wrapper from '@/components/shared/wrapper';
function Aboutpage() {
  return (
    <Wrapper>
    <div className='bg-yellow-100'>
      {/* about bakery88888888888 */}
<div className='flex px-10 '>
      <div className='flex-1  mt-10 '>
        <h1 className='text-red-400 text-4xl font-serif font-bold mt-10' >About Our Bakery!</h1>
        <h4 className='text-teal-800 font-bold my-10 text-3xl '>Our products are famous for their mouth watering taste.</h4>
        <p className='text-teal-800 mb-6 mx-6'>At [Bake Town], we believe that good things come in all shapes and sizes. Our bakery features a cozy,
          inviting atmosphere designed to make you feel right at home. With a charming layout that encourages community gathering, our space is perfect for enjoying a sweet treat or a freshly baked loaf.</p>
        <p className='text-teal-800 mb-6 mx-6'>At [Bake Town], we believe that good things come in all shapes and sizes. Our bakery features a cozy,
          inviting atmosphere designed to make you feel right at home. With a charming layout that encourages community gathering, our space is perfect for enjoying a sweet treat or a freshly baked loaf.</p>
        <p className='text-teal-800 mb-6 mx-6'>At [Bake Town], we believe that good things come in all shapes and sizes. Our bakery features a cozy,
          inviting atmosphere designed to make you feel right at home. With a charming layout that encourages community gathering, our space is perfect for enjoying a sweet treat or a freshly baked loaf.</p>
      </div>

<div className='flex-1 mt-10'>
      <Image src={shop} alt='shopimage' width={550} height={300} className='rounded-md shadow-lg' />
      </div>
      </div>

  {/* our location8888888888888 */}
      <div className='flex px-10 '>
        <div className='flex-1'>
        <Image src={shop2} alt='shopimage' width={650} height={600}  className='rounded-md shadow-md'/>
        </div>
          <div className='flex-1 mx-6'>
        <h4 className='text-red-400 text-4xl font-serif font-bold mt-10  mi-6' >Our Location:</h4>
        <p className='text-teal-800 mb-6 mx-6 mt-6'>Nestled in the heart of [City/Neighborhood], our bakery is conveniently located at [Address]. We are proud to serve our local community with fresh, artisanal baked goods made from the finest ingredients. Whether you are stopping by for your morning coffee or picking up a cake for a special occasion, our location is easily accessible and welcoming.</p>
        <p className='text-teal-800 mb-6 mx-6 mt-6'>Nestled in the heart of [City/Neighborhood], our bakery is conveniently located at [Address]. We are proud to serve our local community with fresh, artisanal baked goods made from the finest ingredients. Whether you are stopping by for your morning coffee or picking up a cake for a special occasion, our location is easily accessible and welcoming.</p>
        </div>
      </div>
      {/*  our staff88888888888888 */}
      <div className='flex px-10 '>
        <div className='flex-1'>
        <h4 className='text-red-400 text-4xl font-serif font-bold mt-10  ml-6' >Our Staff:</h4>
        <p className='text-teal-800 mb-6 mx-6 mt-6'>Our team at [Bakery Name] is passionate about baking and dedicated to providing exceptional service. Led by our head baker, [Name], who has [X years] of experience in the industry, our skilled staff works tirelessly to create delicious treats that delight our customers. We pride ourselves on our friendly service and commitment to quality, ensuring that every visit is a memorable one.</p>
        <p className='text-teal-800 mb-6 mx-6 mt-6'>Our team at [Bakery Name] is passionate about baking and dedicated to providing exceptional service. Led by our head baker, [Name], who has [X years] of experience in the industry, our skilled staff works tirelessly to create delicious treats that delight our customers. We pride ourselves on our friendly service and commitment to quality, ensuring that every visit is a memorable one.</p>
        <p className='text-teal-800 mb-6 mx-6 mt-6'>Our team at [Bakery Name] is passionate about baking and dedicated to providing exceptional service. Led by our head baker, [Name], who has [X years] of experience in the industry, our skilled staff works tirelessly to create delicious treats that delight our customers. We pride ourselves on our friendly service and commitment to quality, ensuring that every visit is a memorable one.</p>
        </div>
        <div>
        <Image src={staff1} alt='shopimage' width={250} height={100}  className='rounded-md shadow-md'/>


        </div>

      </div>
      <Footer/>
    </div>
    </Wrapper>
  )
}

export default Aboutpage;