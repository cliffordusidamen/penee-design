import React from 'react';

const Calculator = () => {
    return ( 
        <div className="flex flex-col bg-white py-10">
            <h4 className="text-3xl text-center font-bold mb-10">Cash Flow Is King</h4>
            <div className="flex flex-col md:flex-row justify-center bg-white">
                <div className="rounded-md w-80 p-8 bg-red-100 text-left">
                    <div className="block">
                        <span className="font-bold font-gray-800 block mb-3 text-sm">Current cashflow</span>
                        <span className="font-bold font-gray-800 block text-xl mb-10">
                            How much do <br /> you make?
                        </span>
                        <input type="text" className="form-control text-center" placeholder="Enter amount" />
                    </div>
                </div>

                <div className="rounded-md md:ml-10 w-80 p-8 bg-gray-100 text-left">
                    <div className="block">
                        <span className="font-bold font-gray-800 block mb-3 text-sm">Current cashflow</span>
                        <span className="font-bold font-gray-800 block text-xl mb-10">
                            How much do <br /> you make?
                        </span>
                        <span className="font-bold font-gray-800 block mb-3 text-4xl">
                            0.00
                        </span>
                        
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Calculator;