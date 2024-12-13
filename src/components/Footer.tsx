import React from "react";
import { ShareSocial } from "react-share-social";

const Footer: React.FC = () => {
    const style = {
        root: {
          background: 'transparent',
          height: '90px',
          color: 'white',
      
        },
        copyContainer: {
          display: 'none',
        },
        title: {
          color: 'aquamarine',
          fontStyle: 'italic'
        }
      };
  return (
    <div className="font-raleway relative flex flex-col gap-12 bg-[#23262F] lg:px-32 px-6 py-12 text-white">
      <div className="flex md:flex-row flex-col justify-between md:items-end md:gap-6 w-full">
        <p className="text-xl font-bold">FurniShop</p>
        <div className="grayscale flex justify-center">
        <ShareSocial
          url="oreoryza.my.id"
          socialTypes={["linkedin", "facebook", "twitter", "whatsapp"]}
          style={style}
        />
        </div>
        {/* <ul className="flex gap-4">
          <li className="flex justify-center items-center h-10 w-10 bg-[#6D5DD3]/[.1] rounded-full">
            <a
              href=""
              className="flex justify-center items-center rounded-full w-full h-full"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </li>
          <li className="flex justify-center items-center h-10 w-10 bg-[#6D5DD3]/[.1] rounded-full">
            <a
              href=""
              className="flex justify-center items-center rounded-full w-full h-full"
            >
              <i className="bi bi-facebook"></i>
            </a>
          </li>
          <li className="flex justify-center items-center h-10 w-10 bg-[#6D5DD3]/[.1] rounded-full">
            <a
              href=""
              className="flex justify-center items-center rounded-full w-full h-full"
            >
              <i className="bi bi-twitter"></i>
            </a>
          </li>
          <li className="flex justify-center items-center h-10 w-10 bg-[#6D5DD3]/[.1] rounded-full">
            <a
              href=""
              className="flex justify-center items-center rounded-full w-full h-full"
            >
              <i className="bi bi-github"></i>
            </a>
          </li>
        </ul> */}
      </div>
      <div className="md:flex hidden bg-white h-0.5 w-full"></div>
      <div className="md:flex justify-between grid grid-cols-2 gap-16">
        <ul className="flex flex-col gap-3 text-sm">
          <li className="font-medium text-xl mb-1">Our Products</li>
          <li>
            <a href="">The Support Suite</a>
          </li>
          <li>
            <a href="">The Sales Suite</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
          <li>
            <a href="">Guide</a>
          </li>
        </ul>
        <ul className="flex flex-col gap-3 text-sm">
          <li className="font-medium text-xl mb-1">Top Features</li>
          <li>
            <a href="">Ticketing System</a>
          </li>
          <li>
            <a href="">Knowledge Base</a>
          </li>
          <li>
            <a href="">Community Forums</a>
          </li>
          <li>
            <a href="">Help Desk Software</a>
          </li>
        </ul>
        <ul className="flex flex-col gap-3 text-sm">
          <li className="font-medium text-xl mb-1">Resources</li>
          <li>
            <a href="">Product Support</a>
          </li>
          <li>
            <a href="">Request Demo</a>
          </li>
          <li>
            <a href="">Library</a>
          </li>
          <li>
            <a href="">Peoplepower Blog</a>
          </li>
        </ul>
        <ul className="flex flex-col gap-3 text-sm">
          <li className="font-medium text-xl mb-1">Company</li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Press</a>
          </li>
          <li>
            <a href="">Investors</a>
          </li>
          <li>
            <a href="">Events</a>
          </li>
        </ul>
        <ul className="flex flex-col gap-3 text-sm">
          <li className="font-medium text-xl mb-1">Favourite Things</li>
          <li>
            <a href="">For Enterprise</a>
          </li>
          <li>
            <a href="">For Startups</a>
          </li>
          <li>
            <a href="">For Benchmark</a>
          </li>
          <li>
            <a href="">For Small Business</a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center w-full">
        <p className="absolute bottom-4 text-sm text-center">
          © NameBrand 2022 - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
