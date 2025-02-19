import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center mt-5 border-t-4 border-cyan-300">
        <div className="grid grid-cols-2 sm:grid-cols-4 sm:gap-9 ml-12 md:ml-0  mt-10">
            <div className="">
                <label htmlFor="" className="font-bold lg:text-xl">Product</label>
                <ul className="mt-3 ">
                    <li className="lg:text-xl">
                        <a href="#" className="py-1 text-gray-800">
                            Flutter
                        </a>
                    </li>
                    <li>
                        <a href="#" className="py-1 text-gray-800 lg:text-xl">
                            React
                        </a>
                    </li>
                    <li>
                        <a href="#" className="py-1 text-gray-800 lg:text-xl">
                            Android
                        </a>
                    </li>
                    <li>
                        <a href="#" className="py-1 text-gray-800 lg:text-xl">
                            iOS
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <label htmlFor="" className="font-bold lg:text-xl">Design to code</label>
                <ul className="mt-3">
                    <li>
                        <a href="#" className="py-1 text-gray-800 lg:text-xl">
                            Figma Plugin
                        </a>
                    </li>
                    <li>
                        <a href="#" className="py-1 text-gray-800 lg:text-xl">
                            Template
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <label htmlFor="" className="font-bold lg:text-xl">Comparison</label>
                <ul className="mt-3">
                    <li>
                        <a href="#" className="py-1 text-gray-800 lg:text-xl">
                            DhiWise vs Anima
                        </a>
                    </li>
                    <li>
                        <a href="#" className="py-1 text-gray-800 lg:text-xl">
                        DhiWise vs Appsmith
                        </a>
                    </li>
                    <li>
                        <a href="#" className="py-1 text-gray-800 lg:text-xl">
                        DhiWise vs Flutterflow
                        </a>
                    </li>
                    <li>
                        <a href="#" className="py-1 text-gray-800 lg:text-xl">
                        DhiWise vs Monday Hero
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <label htmlFor="" className="font-bold lg:text-xl">Company</label>
                <ul className="mt-3">
                    <li>
                        <a href="/about" className="py-1 text-gray-800 lg:text-xl">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="py-1 text-gray-800 lg:text-xl">
                            Contact us
                        </a>
                    </li>
                    <li>
                        <a href="#" className="py-1 text-gray-800 lg:text-xl">
                            Career
                        </a>
                    </li>
                    <li>
                        <a href="#" className="py-1 text-gray-800 lg:text-xl">
                            Term of service
                        </a>
                    </li>
                    <li>
                        <a href="#" className="py-1 text-gray-800 lg:text-xl">
                            privacy Policy
                        </a>
                    </li>
                </ul>
            </div>
        </div>
      </div>
      <center className="py-4">
            Reserved All rights@copyright 2025
        </center>
    </>
  );
};

export default Footer;
