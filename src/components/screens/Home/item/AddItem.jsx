import React from 'react'
import { useState } from 'react'

const AddItem = ({ addTodo }) => {

const [title, setTitle] = useState("")

    return (
        <div>
            <h2 className='mt-20 text-center'>Add task</h2>
        <div className=' text-white min-w-full m-w-96 flex justify-between items-center bg-gray-800 py-3 px-6 my-4 rounded-md cursor-pointer'>
                <input className='w-full bg-transparent text-white outline-none border-none'
                    placeholder='Add task here'
                    value={title}
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter')
                        {
                            addTodo(title)
                            setTitle('')
                        }}
                    } />
            </div>
        </div>
    )
}

export default AddItem