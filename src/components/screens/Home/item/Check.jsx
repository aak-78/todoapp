import React from 'react'
import { BsCheck } from 'react-icons/bs'


const check = () => {
    return (
        <div className='border-2 border-purple-500 rounded-lg w-6 h-6 text-center box-content'>
            <BsCheck size={24} className="text-gray-100" /> 
        </div>
    )
}

export default check
