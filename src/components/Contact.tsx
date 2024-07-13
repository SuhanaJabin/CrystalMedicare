import React from 'react';

const Contact = () => {
  return (
    <div id="about" className="mx-auto container xl:px-20 lg:px-12 p-6 pl-1 pr-1 py-12">
      <div className="flex items-center justify-center">
        <div className="flex w-full p-1 lg:w-5/6 flex-wrap items-center mb-10 justify-center">
          <div>
            <h1 className="lg:text-5xl text-3xl text-gray-900 text-center font-bold mb-10">
              CONTACT 
            </h1>
            <p className="transition-all duration-500 hover:text-primary font-semibold text-xl lg:text-2xl text-tertiary p-3 text-justify">
              We&apos;re here to assist you with all your healthcare needs. Reach out to us through any of the follow
            </p>

            <div className="flex flex-row mt-5">
              <p className="pl-1 text-xl font-semibold lg:text-2xl text-tertiary text-justify">
                Address:
              </p>
              <div className="flex flex-col pl-1 font-semibold ml-5 text-xl lg:text-2xl text-tertiary text-justify">
                <p>Apartment 38</p>
                <p>Hill House Commercial Gate,</p>
                <p>Mansfield,</p>
                <p>NG18 1EJ</p>
              </div>
            </div>
            <h1 className="mt-2 pl-1 text-xl lg:text-2xl text-tertiary font-semibold text-justify">
              Contact No: +447438035802
            </h1>
            <h1 className="mt-2 pl-1 text-xl lg:text-2xl text-tertiary font-semibold text-justify">
              Email:{' '}
              <a className="text-tertiary font-semibold transition-all duration-300" href="mailto:crystalmedicare.co.uk@gmail.com">
                crystalmedicare.co.uk@gmail.com
              </a>
            </h1>
            <p className="transition-all duration-500 pl-1 font-semibold hover:text-primary mt-5 text-xl lg:text-2xl text-tertiary p-3 text-justify">
              For appointments or enquiries, feel free to call, email or visit our website. Our dedicated team is ready to help you achieve optimal health and wellbeing.
            </p>
          </div>
        </div>
      </div>
      <h1 className="mt-5 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-700">
        For more details:{' '}
        <a className="text-gray-700 transition-all duration-300" href="https://www.crystalmedicare.co.uk">
          www.crystalmedicare.co.uk
        </a>
      </h1>

      <p className="mt-6 text-xs lg:text-sm leading-none text-center font-bold text-gray-700 dark:text-gray-50">
        Copyright &copy; {new Date().getFullYear()} All rights reserved{' '}
      </p>
    </div>
  );
};

export default Contact;
