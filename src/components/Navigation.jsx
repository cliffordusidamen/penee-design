import React from "react";
import IconChevronDown from "./icons/IconChevronDown";
import IconMenu from "./icons/IconMenu";

const Navigation = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="w-full flex flex-wrap p-5 flex-row md:items-center bg-white shadow-md">
        <a href="/"  className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src="/logo.svg" />
        </a>
        <nav className="hidden md:block md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a href="/" className="mr-5 hover:text-gray-900 text-sm font-bold ">Product <IconChevronDown className="inline h-5 v-5" /></a>
          <a href="/" className="mr-5 hover:text-gray-900 text-sm font-bold">Pricing</a>
          <a href="/" className="mr-5 hover:text-gray-900 text-sm font-bold">Why Penee?</a>
          <a href="/" className="mr-5 hover:text-gray-900 text-sm font-bold">Free Business Resources</a>
        </nav>
        <span className='hidden md:inline'>
            <button className="btn btn-primary ">
            Get Started
            </button>
        </span>
        <span className='text-gray-600'>
            <button className="btn">
                <IconMenu className="h-5 w-5" />
            </button>
        </span>
      </div>
    </header>
  );
};

export default Navigation;
