import React from 'react';

import config from '../config/index.json';

const Contact = () => {
  const { company, about } = config;
  const { logo, name: companyName } = company;
  const { socialMedia, sections } = about;

  return (
    <div
      id="about"
      className="mx-auto container  xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
     <div className='flex items-center justify-center'>
     <div className="flex w-5/6 flex-wrap  items-center mb-10 justify-center">
        <div>
        
          {/* <img src={logo} alt={companyName} className="w-16 h-16" /> */}
          <h1 className='text-5xl font-bold mb-10'>Contact Us</h1>
          <p className='transition-all duration-500 hover:text-primary hover:text-3xl sm:text-xl text-2xl font-bold text-gray-600  '>We're here to assist you with all your healthcare needs. Reach out to us through any of the follow: </p>
          
         <div className='flex mt-5'>
         <p className='text-2xl font-bold text-gray-600 sm:text-xl '>Address: </p>
  <div className=" flex flex-col ml-5 text-2xl font-bold text-gray-600 sm:text-xl">
    <p>Apartment 38</p>
    <p>Hill House Commercial Gate,</p>
    <p>Mansfield,</p>
    <p>NG18 1EJ</p>
  </div>
         </div>
  <h1 className='mt-2 text-xl font-bold text-gray-600'>Contact No: +447438035802</h1>
 <h1 className='mt-2 text-xl font-bold text-gray-600'>Email Us: <a className='font-bold text-gray-600 transition-all duration-300 '  href='crystalmedicare.co.uk@gmail.com'>crystalmedicare.co.uk@gmail.com</a></h1>
 <p className='transition-all duration-500 hover:text-primary mt-5 hover:text-3xl sm:text-xl text-2xl font-bold text-gray-600  '>For appointments or enquiries, feel free to call,email or visit our website. Our dedicated team is ready to help you achieve optimal health and wellbeing. </p>
   
         
{/* <h3>Address:</h3>
          <h3>Apartment38,hill house
 commercial gate,
 Mansfield,NG181EJ</h3>
 <a href="https://github.com/issaafalkattan" className='text-black' rel="nofollow">
              Email
            </a>
            <h3>For more information : </h3>
            <a href="https://github.com/issaafalkattan" className='text-black' rel="nofollow">
              
            </a> */}
        </div>
       {/* <div className='ml-32'> */}

       {/* <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12"> */}
          {/* {sections.map((section, index) => (
            <a
              key={`${section.name}-${index}`}
              href={section.href}
              className="hover:text-primary text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white"
            >
              {section.name}
              {section.content}
            </a>
          ))} */}
       
         
          {/* <h3>Address:</h3>
          <h3>Apartment38,hill house
 commercial gate,
 Mansfield,NG181EJ</h3>
 <a href="https://github.com/issaafalkattan" rel="nofollow">
              Email
            </a>

        </div> */}
       
        {/* <div className="flex items-center mt-6">
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            Copyright &copy; {new Date().getFullYear()} All rights reserved{' '}
            <a href="https://github.com/issaafalkattan" rel="nofollow">
              Issaaf Kattan
            </a>
          </p>
        </div> */}

       {/* </div> */}
      </div>
      {/* <div className='ml-48'>
      <div className="flex ">
    
</div>
 

      </div> */}
     </div>
     <h1 className='mt-5 text-2xl font-bold text-center text-gray-700'>For more details: <a className="text-gray-700 transition-all duration-300" href='www.crystalmedicare.co.uk'>www.crystalmedicare.co.uk</a></h1>
    
          <p className="mt-6 text-xs lg:text-sm leading-none text-center font-bold text-gray-700 dark:text-gray-50">
            Copyright &copy; {new Date().getFullYear()} All rights reserved{' '}
            
          </p>
      
      
    </div>
  );
};
export default Contact;
