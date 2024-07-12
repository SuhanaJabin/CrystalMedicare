import React from 'react';

const Contact = () => {
  return (
    <div
      id="about"
      className="mx-auto container  xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex items-center justify-center">
        <div className="flex w-5/6 flex-wrap  items-center mb-10 justify-center">
          <div>
            {/* <img src={logo} alt={companyName} className="w-16 h-16" /> */}
            <h1 className="text-5xl font-bold mb-10">Contact Us</h1>
            <p className="transition-all duration-500 hover:text-primary hover:text-3xl sm:text-xl text-2xl font-bold text-gray-600  ">
              We&apos;re here to assist you with all your healthcare needs.
              Reach out to us through any of the follow:
            </p>

            <div className="flex mt-5">
              <p className="text-2xl font-bold text-gray-600 sm:text-xl ">
                Address:{' '}
              </p>
              <div className=" flex flex-col ml-5 text-2xl font-bold text-gray-600 sm:text-xl">
                <p>Apartment 38</p>
                <p>Hill House Commercial Gate,</p>
                <p>Mansfield,</p>
                <p>NG18 1EJ</p>
              </div>
            </div>
            <h1 className="mt-2 text-xl font-bold text-gray-600">
              Contact No: +447438035802
            </h1>
            <h1 className="mt-2 text-xl font-bold text-gray-600">
              Email Us:{' '}
              <a
                className="font-bold text-gray-600 transition-all duration-300 "
                href="mailto:crystalmedicare.co.uk@gmail.com"
              >
                crystalmedicare.co.uk@gmail.com
              </a>
            </h1>
            <p className="transition-all duration-500 hover:text-primary mt-5 hover:text-3xl sm:text-xl text-2xl font-bold text-gray-600  ">
              For appointments or enquiries, feel free to call, email or visit
              our website. Our dedicated team is ready to help you achieve
              optimal health and wellbeing.{' '}
            </p>
          </div>
        </div>
      </div>
      <h1 className="mt-5 text-2xl font-bold text-center text-gray-700">
        For more details:{' '}
        <a
          className="text-gray-700 transition-all duration-300"
          href="https://www.crystalmedicare.co.uk"
        >
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
