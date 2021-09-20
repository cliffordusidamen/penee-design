import React from 'react';

const Footer = () => {
    return ( 
        <div className="container mx-auto">

            <div className="w-full border-t flex flex-col md:flex-row text-gray-500 md:justify-between px-10 py-5">
                <div>
                    <a href="#">Privacy policy</a>
                    <a href="#">Terms &amp; Conditions</a>
                </div>

                <div>
                    &copy;
                    All Rights Reserved. Pennee Technologies RC1657662
                </div>
            </div>
        </div>
     );
}
 
export default Footer;