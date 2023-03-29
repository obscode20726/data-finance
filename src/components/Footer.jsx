import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#19E4FF]'>DataSense.</h1>
        <p className='py-4'>Your satisfaction is our top priority. That's why we offer a 100% satisfaction guarantee on all of our products and services. If you're not completely satisfied, please let us know how we can improve - we value your feedback.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <a href="https://www.facebook.com/" className="text-blue-500 hover:text-[#19E4FF]">
        <FaFacebookSquare size={30} />
      </a>
      <a href="https://www.instagram.com/" className="text-pink-500 hover:text-[#19E4FF]">
        <FaInstagram size={30} />
      </a>
      <a href="https://twitter.com/" className="text-blue-400 hover:text-[#19E4FF]">
        <FaTwitterSquare size={30} />
      </a>
      <a href="https://github.com/" className="text-gray-500 hover:text-[#19E4FF]">
        <FaGithubSquare size={30} />
      </a>
      <a href="https://dribbble.com/" className="text-pink-600 hover:text-[#19E4FF]">
        <FaDribbbleSquare size={30} />
      </a>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-[#19E4FF]'>Solutions</h6>
        <ul>
          <li className='py-2 text-sm'>
              <a href="#" className="text-white-500 hover:text-[#19E4FF] hover:underline">
            Analytics
              </a>
          </li>
          <li className='py-2 text-sm'>
              <a href="#" className="text-white-500 hover:text-[#19E4FF] hover:underline">
            Marketing
              </a>
          </li>
          <li className='py-2 text-sm'>
              <a href="#" className="text-white-500 hover:text-[#19E4FF] hover:underline">
            Commerce
              </a>
          </li>
          <li className='py-2 text-sm'>
              <a href="#" className="text-white-500 hover:text-[#19E4FF] hover:underline">
                Insights
              </a>
          </li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-[#19E4FF]'>Support</h6>
        <ul>
          <li className='py-2 text-sm'>
              <a href="#" className="text-white-500 hover:text-[#19E4FF] hover:underline">
              Pricing
              </a>
          </li>
          <li className='py-2 text-sm'>
              <a href="#" className="text-white-500 hover:text-[#19E4FF] hover:underline">
              Documentation
              </a>
          </li>
          <li className='py-2 text-sm'>
              <a href="#" className="text-white-500 hover:text-[#19E4FF] hover:underline">
              Guides
              </a>
          </li>
          <li className='py-2 text-sm'>
              <a href="#" className="text-white-500 hover:text-[#19E4FF] hover:underline">
              API Status
              </a>
          </li>
        </ul>
        
    </div>
    <div>
        <h6 className='font-medium text-[#19E4FF]'>Company</h6>
        <ul>
          <li className='py-2 text-sm'>
              <a href="#" className="text-white-500 hover:text-[#19E4FF] hover:underline">
              About
              </a>
          </li>
          <li className='py-2 text-sm'>
              <a href="#" className="text-white-500 hover:text-[#19E4FF] hover:underline">
              Blog
              </a>
          </li>
          <li className='py-2 text-sm'>
              <a href="#" className="text-white-500 hover:text-[#19E4FF] hover:underline">
              Jobs
              </a>
          </li>
          <li className='py-2 text-sm'>
              <a href="#" className="text-white-500 hover:text-[#19E4FF] hover:underline">
              Press
              </a>
          </li>
          <li className='py-2 text-sm'>
              <a href="#" className="text-white-500 hover:text-[#19E4FF] hover:underline">
              Careers
              </a>
          </li>
        </ul>
        
    </div>
    <div>
        <h6 className='font-medium text-[#19E4FF]'>Legal</h6>
        <ul>
          <li className='py-2 text-sm'>
              <a href="#" className="text-white-500 hover:text-[#19E4FF] hover:underline">
              Claim
              </a>
          </li>
          <li className='py-2 text-sm'>
              <a href="#" className="text-white-500 hover:text-[#19E4FF] hover:underline">
              Policy
              </a>
          </li>
          <li className='py-2 text-sm'>
              <a href="#" className="text-white-500 hover:text-[#19E4FF] hover:underline">
              Terms
              </a>
          </li>
          
        </ul>
        
    </div>
      </div>
    </div>
  );
};

export default Footer;
