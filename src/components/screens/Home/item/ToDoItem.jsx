import React from 'react'
import Check from './Check'
import TrashBin from './TrashBin'


function ToDoItem ( { todo } ) {
return (
    <div className='text-white flex justify-between items-center bg-gray-800 py-3 px-6 m-4 rounded-md'>
        <div className='flex items-center'>
        <Check />
        <div className='pl-3 text-center'>
            {todo.title}
            </div>
        </div>
        <TrashBin />
    </div>
)
}

export default ToDoItem