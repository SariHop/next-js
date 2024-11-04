import Image from 'next/image'
import React from 'react'

const Protofilio = () => {
    return (
            <div className="w-60 bg-white shadow-lg rounded-lg overflow-hidden m-4">
                <div className="bg-black p-4 flex justify-center">
                    <Image
                        src="/avatar.png"
                        width={120}
                        height={120}
                        alt="Picture of the author"
                        className="border border-neutral-900 rounded-full "
                    />
                </div>
                <div className="text-center py-4 px-6">
                    <h1 className="text-2xl font-bold text-gray-800">Jon Doeh</h1>
                    <p className="text-sm text-gray-500 mt-2">CEO & Founder, Example</p>
                    <p className="text-sm text-gray-500">Harvard University</p>
                </div>
                <div className="text-center pt-4">
                    <input
                        type="button"
                        value="Contact"
                        className="bg-black text-white px-4 py-2  cursor-pointer hover:bg-gray-800 w-full"
                    />
                </div>
            </div>
    )
}

export default Protofilio