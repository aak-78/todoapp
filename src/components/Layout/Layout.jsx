import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className='bg-gray-900 h-screen text-white flex justify-center'>
            <div className='w-[450px]'>
                <h1 className='text-2xl font-bold text-center py-8 px-1'>My To Do List:</h1>
                <div className=''>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout