import React from 'react'
import ToDoItem from './item/ToDoItem'
import { useState } from 'react'
import AddItem from './item/AddItem'

const data = [
    {
        _id: 1,
        title: 'Finish essay',
        isComplited: false
    },
    {
        _id: 2,
        title: 'Read the next chapter of the book',
        isComplited: true
    },
    {
        _id: 3,
        title: 'learn React hucks',
        isComplited: false
    },
]

const Home = () => {

    const [todos, setTodos] = useState(data)

    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        console.log(current)
        current.isComplited = !current.isComplited
        setTodos(copy)
    }

    const removeTodo = (id) => {
        setTodos([...todos].filter(t => t._id !== id))
    }

    const addTodo = (title) => {
        setTodos([{
            _id: new Date(),
            title,
            isComplited: false,
        },
            ...todos,
            
        ])
    }
    


window.addTodo = addTodo
    
    return (
        <div>
            {todos.map(todo => 
                <ToDoItem key={todo._id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo} />
            )}
                <AddItem addTodo={addTodo}/>
        </div>
    )
}

export default Home