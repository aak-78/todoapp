import React from 'react'
import Check from './Check'
import TrashBin from './TrashBin'


function ToDoItem ( { todo, changeTodo, removeTodo } ) {
return (
    <div className='text-white min-w-full m-w-96 flex justify-between items-center bg-gray-800 py-3 px-6 my-4 rounded-md cursor-pointer'>
        <div className='flex items-center'>

            <div onClick={() => changeTodo(todo._id)} className='text-center self-center'>    
                <Check isComplited={todo.isComplited} />
            </div>

            <div className={`pl-3 text-center  ${todo.isComplited ? 'line-through' : ''}`}>
                {todo.title}
            </div>

        </div>

        <div onClick={() => removeTodo(todo._id)}>
            <TrashBin />
        </div>

    </div>
)
}

export default ToDoItem