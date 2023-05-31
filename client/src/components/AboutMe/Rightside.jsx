import React from 'react'

const Rightside = ({ onClose }) => {
    return (
        <div className="w-[40%] bg-red-500 relative">
            {/* Right Column */}
            <h1 className="text-white text-center">Right Column</h1>
            <button className="text-white absolute top-2 right-2" onClick={onClose}>Button</button>
        </div>
    )
}

export default Rightside
