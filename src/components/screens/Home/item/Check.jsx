import React from 'react'
import { BsCheck } from 'react-icons/bs'


const check = ({ isComplited }) => {
    return (
        <div className={`flex justify-center items-center border-2 border-purple-500 
        rounded-lg w-6 h-6 text-center box-content ${isComplited ? 'bg-pink-400' : ''}`}>
        {isComplited && <BsCheck size={24} className="text-gray-800" />} 
        </div>
    )
}

export default check
