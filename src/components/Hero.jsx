import React from 'react';

const Hero = () => {
    return ( 
        <div className="max-w-4xl bg-gray-50 mx-auto mt-10">
            <div className="flex flex-col md:flex-row justify-center">
                <div className="max-w-xs text-left">
                    <span className="text-3xl font-bold">
                        Growth partner for small businesses
                    </span>

                    <p className="my-10">Enjoy asset loans, automated business management, and business reports summarized in plain english.</p>

                    <p>
                        <a href="/" className="btn btn-primary text-sm">
                            Get Early Access Now
                        </a>
                    </p>
                </div>

                <img src="/assets/Group-5024.png" className="max-w-sm" />
            </div>
        </div>
     );
}
 
export default Hero;