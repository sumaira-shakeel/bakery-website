import React from 'react'
import Image from 'next/image';
import cake2 from '/public/cake2.jpg'
import staff2 from '/public/staff2.jpg'

import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import Footer from '@/components/layout/Footer';


import { GoMail } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
function Contact() {
  return (
    <div id='contact' className=' bg-yellow-100'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
          <h2 className='text-3xl text-red-400 mt-6 font-bold font-serif mx-10'>place your order here</h2>
          <p className='text-teal-800 text-[20px] font-serif pt-2 mx-10' >
            contact us and enjoy a delicious moments which are unforgettable taste......
          </p>
          <div className='flex gap-3 items-center mx-10 text-teal-800'>
            <GoMail size={30} />xyz@gmail.com
          </div>
          <div className='flex gap-3 items-center mx-10 text-teal-800'>
            <BsTelephone size={30} />0312-2357925
          </div>
          <h3 className='mx-10 text-2xl text-teal-800 font-semibold font-sans'>Follow us</h3>
          <div className='flex mx-10 text-3xl gap-6 text-red-400 '>
            <FaFacebook className='hover:text-teal-600 shadow-lg' />
            <FaInstagramSquare className='hover:text-teal-600 shadow-lg' />
            <FaTwitterSquare className='hover:text-teal-600 shadow-lg' />
          </div>

          <h2 className='text-teal-800 font-bold text-[16px] mx-10 my-6 py-4 pt-4'>we are welcome you with open arams kindly visit at our place
            <br />
            <p>and enjoying a wonder full treate <br />and meet with our humble and well behaved staf.
            Visit Us
Come See Us: We welcome you to visit our bakery! Enjoy the aroma of freshly baked goods and experience our friendly service. We’re located at .
Feedback
We Value Your Feedback: Your opinion matters! Let us know how we’re doing or share your experience with us. We’re always looking to improve!
Special Requests
Custom Orders: Have a special event? Inquire about our custom cake options or other personalized treats to make your celebration unforgettable!
Come See Us: We welcome you to visit our bakery! Enjoy the aroma of freshly baked goods and experience our friendly service. We’re located at .
Feedback
We Value Your Feedback: Your opinion matters! Let us know how we’re doing or share your experience with us. We’re always looking to improve!
Special Requests
Custom Orders: Have a special event? Inquire about our custom cake options or other personalized treats to make your celebration unforgettable!
Come See Us: We welcome you to visit our bakery! Enjoy the aroma of freshly baked goods and experience our friendly service. We’re located at .
Feedback
We Value Your Feedback: Your opinion matters! Let us know how we’re doing or share your experience with us. We’re always looking to improve!
Special Requests
Custom Orders: Have a special event? Inquire about our custom cake options or other personalized treats to make your celebration unforgettable!
            </p>



          </h2>

        </div>

        <div className='space-y-8'>
          <div>
            <Image src={cake2} alt='cakeimage' height={400} width={400} className='rounded-lg mt-6' />
            <Image src={staff2} alt='cakeimage' height={150} width={400} className='rounded-lg mt-6' />


          </div>

          {/* <button className='bg-red-400  text-white py-3 px-[167px] rounded-lg hover:bg-red-300'>Get order!</button> */}
        </div>


      </div>
      <Footer />

    </div>
  )
}

export default Contact;
