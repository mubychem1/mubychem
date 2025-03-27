import React from 'react'

const Simple = () => {
    return (
        <>
            {/*----------- Header Section ---------- */}
            <div className='bg-white'>
                <div className='relative h-[500px] bg-cover rounded-4xl overflow-hidden mx-4 md:mx-10 max-w-screen-xl mx-auto' style={{ backgroundImage: `url(${background})` }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute inset-0 flex items-center justify-center ">
                        <div>
                            <h1 className="text-white text-8xl font-bold mb-4 pl-4">ACACIA</h1>
                            <p className="text-white text-xl font-bold text-center">IP/BP/PH.EUR/USP/JP/FCC</p>
                        </div>
                    </div>
                </div>
            </div>

            {/*---------- Description Section ------- */}
            <div className="w-full flex flex-col md:flex-row items-start p-6 bg-white mx-4 md:mx-10 max-w-screen-xl mx-auto">
                {/* Left Side - Product Details */}
                <div className="flex-1">
                    <table className="w-full text-left text-blue-900 border-collapse">
                        <tbody>
                            <tr>
                                <td className="font-bold text-blue-700 py-2">Product Name:</td>
                                <td className="py-2 text-lg font-semibold">MILK CALCIUM POWDER</td>
                            </tr>
                            <tr>
                                <td className="font-bold text-blue-700 py-2">CAS No.:</td>
                                <td className="py-2">N/A</td>
                                <td className="font-bold text-blue-700 py-2">HSN Code:</td>
                                <td className="py-2">N/A</td>
                            </tr>
                            <tr>
                                <td className="font-bold text-blue-700 py-2">Shelf Life:</td>
                                <td className="py-2">3 years - 20ºC powder</td>
                                <td className="font-bold text-blue-700 py-2">Pharmaceutical Grade:</td>
                                <td className="py-2">Nutraceutical</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Right Side - Product Image */}
                <div className="flex-1 flex justify-end mt-6 md:mt-0">
                    <img
                        src="https://www.wbcil.com/wp-content/webp-express/webp-images/uploads/2024/11/Milk-Calcium-1.jpg.webp" // Change this to the correct image path
                        alt="Milk Calcium Powder"
                        className="w-full md:w-2/3 lg:w-1/2 rounded shadow-md"
                    />
                </div>
            </div>

            {/* --------- Other Section --------- */}
            <div className="border rounded-md p-6 shadow-md w-full mx-4 md:mx-10 max-w-screen-xl mx-auto">
                <div className="flex border-b">
                    <button className="px-4 py-2 bg-blue-600 text-white font-semibold">USP</button>
                    <button className="px-4 py-2 bg-gray-300 text-gray-700 font-semibold">SYNONYMS</button>
                </div>
                <div className="mt-4">
                    <h2 className="text-xl font-semibold text-blue-600">USP of Milk Calcium Powder</h2>
                    <ul className="mt-2 space-y-2 text-gray-700">
                        <li className="flex items-start"><span className="text-blue-500 pr-2">✦</span> Bioidentical Calcium for optimal absorption.</li>
                        <li className="flex items-start"><span className="text-blue-500 pr-2">✦</span> Targeted delivery of calcium to bones and teeth.</li>
                        <li className="flex items-start"><span className="text-blue-500 pr-2">✦</span> Enhanced bioavailability for maximum absorption.</li>
                        <li className="flex items-start"><span className="text-blue-500 pr-2">✦</span> Dairy-free option suitable for lactose intolerant and vegan individuals.</li>
                        <li className="flex items-start"><span className="text-blue-500 pr-2">✦</span> Comprehensive bone health support with essential nutrients.</li>
                    </ul>
                </div>
            </div>

            {/* --------------- Design ------------ */}
            <div className="flex items-center bg-white p-6 rounded-lg shadow-md mx-4 md:mx-10 max-w-screen-2xl mx-auto min-h-[200px]"> {/* Adjust min-h value as needed */}
                {/* Image Section */}
                <div className="flex space-x-[-10px] items-center">
                    <img
                        src="https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-03-770x570.jpg"
                        alt="Lab Image 1"
                        className="w-24 h-24 rounded-full border-4 border-white shadow-md"
                    />
                    <img
                        src="https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-01-770x570.jpg"
                        alt="Lab Image 2"
                        className="w-24 h-24 rounded-full border-4 border-white shadow-md"
                    />
                    <img
                        src="https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-02-770x570.jpg"
                        alt="Lab Image 3"
                        className="w-24 h-24 rounded-full border-4 border-white shadow-md"
                    />
                    <img
                        src="https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-05-770x570.jpg"
                        alt="Lab Image 4"
                        className="w-24 h-24 rounded-full border-4 border-white shadow-md"
                    />
                </div>

                {/* Arrow Shape */}
                <div className="w-10 h-10 bg-blue-500 transform rotate-45 ml-[-20px]"></div>

                {/* Text & Button Section */}
                <div className="ml-6 text-gray-700 text-lg">
                    If you are interested in
                    <span className="text-blue-500 font-semibold"> Milk Calcium Powder</span>, then
                    <button className="ml-3 px-4 py-2 bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold rounded-lg shadow-md hover:opacity-90">
                        REQUEST A QUOTE
                    </button>
                </div>
            </div>

        </>
    )
}

export default Simple