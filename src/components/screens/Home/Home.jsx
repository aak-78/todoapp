import React from 'react'
import ToDoItem from './item/ToDoItem'

const todos = [
    {
        _id: 1,
        title: 'Finish essay',
        isCompleted: false
    },
    {
        _id: 2,
        title: 'Read the next chapter of the book',
        isCompleted: true
    },
    {
        _id: 3,
        title: 'learn React hucks',
        isCompleted: false
    },
]

const Home = () => {
    return (
        <div>
            {todos.map(todo => 
                <ToDoItem key={todo._id} todo={todo} />
                )}
        </div>
    )
}

export default Home
